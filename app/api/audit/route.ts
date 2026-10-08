import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    let rawUrl = (body.url || "").trim();

    if (!rawUrl) {
      return NextResponse.json({ error: "Please enter a valid website URL." }, { status: 400 });
    }

    // Auto-prepend https:// if missing
    if (!/^https?:\/\//i.test(rawUrl)) {
      rawUrl = `https://${rawUrl}`;
    }

    let parsedUrl: URL;
    try {
      parsedUrl = new URL(rawUrl);
    } catch {
      return NextResponse.json({ error: "Invalid website URL format." }, { status: 400 });
    }

    const startTime = performance.now();
    let response: Response;

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 12000); // 12s timeout

      response = await fetch(parsedUrl.toString(), {
        method: "GET",
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 (compatible; SA-Software-Innovation-Auditor/1.0)",
          "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          "Accept-Language": "en-US,en;q=0.9",
        },
        signal: controller.signal,
        redirect: "follow",
        cache: "no-store",
      });

      clearTimeout(timeoutId);
    } catch (fetchErr: any) {
      // If https fails, try http fallback
      if (parsedUrl.protocol === "https:") {
        try {
          const fallbackUrl = parsedUrl.toString().replace(/^https:/, "http:");
          response = await fetch(fallbackUrl, {
            headers: {
              "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/124.0.0.0 Safari/537.36",
            },
            redirect: "follow",
            cache: "no-store",
          });
        } catch {
          return NextResponse.json(
            { error: `Could not reach ${parsedUrl.hostname}. Please check if the domain is active and online.` },
            { status: 502 }
          );
        }
      } else {
        return NextResponse.json(
          { error: `Could not reach ${parsedUrl.hostname}. Please check if the domain is active and online.` },
          { status: 502 }
        );
      }
    }

    const latencyMs = Math.round(performance.now() - startTime);
    const html = await response.text();
    const pageSizeKb = Math.round((html.length / 1024) * 10) / 10;

    // Header Analysis
    const serverHeader = response.headers.get("server") || "Standard Cloud Web Server";
    const contentEncoding = response.headers.get("content-encoding") || "None (Uncompressed)";
    const isHttps = response.url.startsWith("https://");

    // Title Extraction
    const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    const title = titleMatch ? titleMatch[1].replace(/\s+/g, " ").trim() : null;
    const titleLength = title ? title.length : 0;

    // Meta Description Extraction
    const descMatch =
      html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([\s\S]*?)["']/i) ||
      html.match(/<meta[^>]*content=["']([\s\S]*?)["'][^>]*name=["']description["']/i);
    const metaDescription = descMatch ? descMatch[1].replace(/\s+/g, " ").trim() : null;
    const metaDescLength = metaDescription ? metaDescription.length : 0;

    // Headings Analysis
    const h1Matches = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
    const h1Count = h1Matches.length;
    let h1Text: string | null = null;
    const firstH1 = h1Matches[0];
    if (firstH1) {
      h1Text = firstH1.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
    }

    // Viewport & Mobile Responsiveness
    const hasViewport = /<meta[^>]*name=["']viewport["']/i.test(html);

    // Schema.org Structured Data
    const hasSchemaOrg = /application\/ld\+json/i.test(html);
    const schemaTypes: string[] = [];
    if (hasSchemaOrg) {
      const schemaMatches = html.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi) || [];
      schemaMatches.slice(0, 5).forEach((block) => {
        const typeMatch = block.match(/["']@type["']\s*:\s*["']([^"']+)["']/i);
        const typeName = typeMatch ? typeMatch[1] : null;
        if (typeName && !schemaTypes.includes(typeName)) {
          schemaTypes.push(typeName);
        }
      });
    }

    // OpenGraph & Canonical
    const hasOpenGraph = /<meta[^>]*property=["']og:title["']/i.test(html);
    const hasCanonical = /<link[^>]*rel=["']canonical["']/i.test(html);

    // Images Analysis
    const imgMatches = html.match(/<img[^>]*>/gi) || [];
    const imageCount = imgMatches.length;
    let imagesMissingAlt = 0;
    imgMatches.forEach((tag) => {
      if (!/\balt\s*=\s*["'][^"']+["']/i.test(tag)) {
        imagesMissingAlt++;
      }
    });

    // Scripts & CSS count
    const scriptMatches = html.match(/<script[^>]*src=/gi) || [];
    const stylesheetMatches = html.match(/<link[^>]*rel=["']stylesheet["']/gi) || [];

    // Calculate Real Performance Score (0-100)
    let performanceScore = 100;
    if (latencyMs > 2500) performanceScore -= 45;
    else if (latencyMs > 1500) performanceScore -= 30;
    else if (latencyMs > 800) performanceScore -= 15;
    else if (latencyMs > 400) performanceScore -= 5;

    if (pageSizeKb > 250) performanceScore -= 15;
    else if (pageSizeKb > 100) performanceScore -= 8;

    if (contentEncoding === "None (Uncompressed)") performanceScore -= 12;
    if (scriptMatches.length > 15) performanceScore -= 10;
    performanceScore = Math.max(18, Math.min(99, performanceScore));

    // Calculate Real SEO Score (0-100)
    let seoScore = 100;
    if (!title) seoScore -= 25;
    else if (titleLength < 25 || titleLength > 70) seoScore -= 10;

    if (!metaDescription) seoScore -= 20;
    else if (metaDescLength < 50 || metaDescLength > 165) seoScore -= 8;

    if (h1Count === 0) seoScore -= 15;
    else if (h1Count > 2) seoScore -= 8;

    if (!hasSchemaOrg) seoScore -= 20;
    if (!hasCanonical) seoScore -= 10;
    if (!hasOpenGraph) seoScore -= 8;
    if (imagesMissingAlt > 0) seoScore -= Math.min(15, imagesMissingAlt * 2);
    seoScore = Math.max(22, Math.min(99, seoScore));

    // Calculate Best Practices & Mobile Score (0-100)
    let bestPracticesScore = 100;
    if (!isHttps) bestPracticesScore -= 35;
    if (!hasViewport) bestPracticesScore -= 35;
    if (imagesMissingAlt > 3) bestPracticesScore -= 15;
    bestPracticesScore = Math.max(25, Math.min(99, bestPracticesScore));

    // Overall Score
    const overallScore = Math.round((performanceScore * 0.45) + (seoScore * 0.35) + (bestPracticesScore * 0.20));

    // Build Diagnostic Bullet Points
    const diagnostics: Array<{ type: "success" | "warning" | "error"; category: "Performance" | "SEO" | "Architecture"; message: string }> = [];

    // Latency Diagnostic
    if (latencyMs < 500) {
      diagnostics.push({
        type: "success",
        category: "Performance",
        message: `Fast initial server TTFB (${latencyMs}ms). Server responds quickly.`,
      });
    } else if (latencyMs < 1500) {
      diagnostics.push({
        type: "warning",
        category: "Performance",
        message: `Moderate response latency (${latencyMs}ms). Edge CDN caching would cut this to <200ms.`,
      });
    } else {
      diagnostics.push({
        type: "error",
        category: "Performance",
        message: `High server latency (${latencyMs}ms). Visitors on mobile experience noticeable delays before content paints.`,
      });
    }

    // Title & Meta SEO Diagnostic
    if (title) {
      diagnostics.push({
        type: "success",
        category: "SEO",
        message: `Title Tag detected: "${title.slice(0, 60)}${title.length > 60 ? "..." : ""}" (${titleLength} chars).`,
      });
    } else {
      diagnostics.push({
        type: "error",
        category: "SEO",
        message: "Missing <title> tag. Critical penalty in Google Search ranking.",
      });
    }

    if (metaDescription) {
      diagnostics.push({
        type: "success",
        category: "SEO",
        message: `Meta Description present (${metaDescLength} chars). Helps search click-through rate.`,
      });
    } else {
      diagnostics.push({
        type: "warning",
        category: "SEO",
        message: "Missing Meta Description. Google generates dynamic snippet fallback.",
      });
    }

    // Schema.org Diagnostic
    if (hasSchemaOrg) {
      diagnostics.push({
        type: "success",
        category: "SEO",
        message: `Schema.org Structured Data found${schemaTypes.length > 0 ? ` (Types: ${schemaTypes.join(", ")})` : ""}.`,
      });
    } else {
      diagnostics.push({
        type: "error",
        category: "SEO",
        message: "No Schema.org (JSON-LD) structured data found. Missing rich Google snippets.",
      });
    }

    // Mobile Viewport Diagnostic
    if (hasViewport) {
      diagnostics.push({
        type: "success",
        category: "Architecture",
        message: "Mobile viewport tag is properly configured for smartphone displays.",
      });
    } else {
      diagnostics.push({
        type: "error",
        category: "Architecture",
        message: "Missing mobile viewport meta tag. Site will render scaled down on mobile phones.",
      });
    }

    // Images Diagnostic
    if (imageCount > 0 && imagesMissingAlt > 0) {
      diagnostics.push({
        type: "warning",
        category: "SEO",
        message: `${imagesMissingAlt} of ${imageCount} images lack 'alt' descriptive tags. Reduces Google Image Search traffic.`,
      });
    }

    // HTTPS Diagnostic
    if (isHttps) {
      diagnostics.push({
        type: "success",
        category: "Architecture",
        message: "SSL / HTTPS encryption active.",
      });
    } else {
      diagnostics.push({
        type: "error",
        category: "Architecture",
        message: "Insecure HTTP connection detected. Browsers flag site as 'Not Secure'.",
      });
    }

    return NextResponse.json({
      url: rawUrl,
      normalizedUrl: parsedUrl.hostname,
      statusCode: response.status,
      serverLatencyMs: latencyMs,
      isHttps,
      serverSoftware: serverHeader,
      contentEncoding,
      pageSizeKb,
      title,
      titleLength,
      metaDescription,
      metaDescLength,
      h1: h1Text,
      h1Count,
      hasSchemaOrg,
      schemaTypes,
      isMobileResponsive: hasViewport,
      hasOpenGraph,
      hasCanonical,
      imageCount,
      imagesMissingAlt,
      scriptCount: scriptMatches.length,
      stylesheetCount: stylesheetMatches.length,
      performanceScore,
      seoScore,
      bestPracticesScore,
      overallScore,
      diagnostics,
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Failed to audit website. Please check the URL and try again." },
      { status: 500 }
    );
  }
}

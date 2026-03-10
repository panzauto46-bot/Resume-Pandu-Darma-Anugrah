const path = require("path");
const puppeteer = require("puppeteer-core");

async function main() {
  const input = process.argv[2];
  const output = process.argv[3];

  if (!input || !output) {
    console.error("Usage: node scripts/render-pdf.cjs <input.html> <output.pdf>");
    process.exit(1);
  }

  const inputPath = path.resolve(input);
  const outputPath = path.resolve(output);
  const executablePath =
    process.env.CHROME_BIN ||
    process.env.PUPPETEER_EXECUTABLE_PATH ||
    "/usr/bin/google-chrome";

  const browser = await puppeteer.launch({
    headless: "new",
    executablePath,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-gpu",
      "--disable-features=Crashpad",
    ],
  });

  try {
    const page = await browser.newPage();
    await page.goto(`file://${inputPath}`, { waitUntil: "networkidle0" });
    await page.pdf({
      path: outputPath,
      printBackground: true,
      preferCSSPageSize: true,
      margin: {
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
      },
    });
    console.log(outputPath);
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

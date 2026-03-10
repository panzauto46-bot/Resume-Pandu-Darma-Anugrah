const puppeteer = require('puppeteer-core');
const path = require('path');

(async () => {
    console.log('🚀 Launching Chrome...');
    const browser = await puppeteer.launch({
        headless: 'new',
        executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
        timeout: 60000
    });

    const page = await browser.newPage();

    console.log('📄 Loading resume page...');
    await page.goto('http://localhost:5173/resume.html', {
        waitUntil: 'networkidle2',
        timeout: 30000
    });

    // Wait for fonts to load
    await new Promise(r => setTimeout(r, 3000));

    // Hide the no-print toolbar
    await page.evaluate(() => {
        const noPrintElements = document.querySelectorAll('.no-print');
        noPrintElements.forEach(el => el.style.display = 'none');
        document.body.style.backgroundColor = 'white';
        document.body.style.padding = '0';
        document.body.style.margin = '0';
    });

    const outputPath = path.join(
        'C:\\Users\\PANZ AUTO\\Documents',
        'Resume_Pandu_Darma_Anugrah.pdf'
    );

    console.log('📑 Generating PDF...');
    await page.pdf({
        path: outputPath,
        format: 'A4',
        printBackground: true,
        margin: {
            top: '0mm',
            right: '0mm',
            bottom: '0mm',
            left: '0mm'
        },
        preferCSSPageSize: true
    });

    console.log(`✅ PDF berhasil disimpan di: ${outputPath}`);

    await browser.close();
    console.log('🎉 Selesai!');
})();

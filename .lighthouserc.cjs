// Audits use an isolated copy of the static build, including the GitHub Pages base.
const base = 'http://localhost/';
module.exports = {
  ci: {
    collect: {
      staticDistDir: '.quality/site',
      url: (process.env.QUALITY_AXE_ONLY === '1' ? [''] : ['', 'particulares/', 'empresas/', 'contacto/', 'area-clientes/']).map(route => base + route),
      numberOfRuns: process.env.QUALITY_BASELINE === '1' || process.env.QUALITY_AXE_ONLY === '1' ? 1 : 3,
      ...(process.env.CHROME_PATH ? { chromePath: process.env.CHROME_PATH } : {}),
      puppeteerScript: './scripts/audit-axe.cjs',
      puppeteerLaunchOptions: { args: ['--disable-extensions', '--disable-dev-shm-usage'] },
      settings: {
        onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
        formFactor: 'mobile',
        screenEmulation: { mobile: true, width: 390, height: 844, deviceScaleFactor: 1, disabled: false },
        maxWaitForLoad: 30000,
      },
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9, aggregationMethod: 'median' }],
        'categories:accessibility': ['error', { minScore: 1, aggregationMethod: 'median' }],
        'categories:best-practices': ['error', { minScore: 0.95, aggregationMethod: 'median' }],
        'largest-contentful-paint': ['error', { maxNumericValue: 2500, aggregationMethod: 'median' }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1, aggregationMethod: 'median' }],
        'total-blocking-time': ['error', { maxNumericValue: 200, aggregationMethod: 'median' }],
        // SEO is reported in full. Demo noindex is intentional and verified by verify-build.
      },
    },
  },
};

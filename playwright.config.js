const config = {
    use: {
        screenshot: 'only-on-failure',
        trace: process.env.CI ? 'retain-on-failure' : 'on',
        ignoreHTTPSErrors: true,
        viewport: { width: 1280, height: 720 },
        timezoneId: 'Etc/UTC',
    },
    retries: process.env.CI ? 1 : 0,
    reporter: [['html', { open: process.env.CI ? 'never' : 'always' }]],
    quiet: true,
    fullyParallel: true,
    timeout: 75000,
    globalTimeout: 25 * 60000, 
    expect: {
        timeout: process.env.CI ? 15000 : 5000,
    },
    storageState: null,
};

export default config;

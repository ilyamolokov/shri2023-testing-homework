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
    forbidOnly: Boolean(process.env.CI),
    timeout: process.env.CI ? 75000 : 20000,
    globalTimeout: 25 * 60000, // Апните таймаут, если все тесты проходят, но падают из-за упора в это значение
    expect: {
        timeout: process.env.CI ? 15000 : 5000,
        toMatchSnapshot: {
            // иногда ПОЧЕМУ-ТО разный размер у одинаковых скриншотов,
            // можем допустить разницу в 5 пикс, но не больше
            maxDiffPixels: 5,
        },
    },
    ...(process.env.CI
        ? {}
        : {
            grepInvert: /@screenshot/,
        }),
};

export default config;

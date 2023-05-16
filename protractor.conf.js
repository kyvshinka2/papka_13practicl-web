const conf = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./specs/**/*.spec.js'],
    framework: "mocha",
    mochaOpts: {
        timeout: 60 * 1000,
    },
    SELENIUM_PROMISE_MANAGER: false
};

exports.config = conf;
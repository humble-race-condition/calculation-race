module.exports = function override(config, env) {
    const rules = config.module.rules.find(rule => rule.oneOf).oneOf;

    rules.forEach(rule => {
        if (rule.use && rule.use.some(loader => loader.loader && loader.loader.includes('css-loader'))) {
            rule.use.forEach(loader => {
                if (loader.loader && loader.loader.includes('css-loader') && loader.options && loader.options.modules) {
                    loader.options.modules.namedExport = false;
                }
            });
        }
    });

    return config;
}
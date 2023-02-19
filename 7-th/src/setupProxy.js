const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/v1/pages',
        createProxyMiddleware({
            target: 'https://restaurant-api.wolt.com',
            changeOrigin: true
        })
    );
};

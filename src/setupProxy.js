const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware(
      '/api', {
      target: 'http://127.0.0.1:9099'
    })
  ).use(
    createProxyMiddleware(
      '/websocket', {
      target: 'ws://127.0.0.1:9099',
      ws: true,
    })
  )
};
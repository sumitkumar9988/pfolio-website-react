const express = require('express')
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express()
// app.use(express.static('build'));

app.use(
    "/",
    createProxyMiddleware({
      target: "http://pfolio.site",
      changeOrigin: true,
    })
  )

module.exports = app
const express = require("express")

const server = express()

server.all("/", (req, res) => {
  res.send('Please connect me into a hosting website to enable 24/7 hosting. apgr.#0840')
})

function keepAlive() {
  server.listen(3000, () => {
    console.log("Creator: AnonymousPlaysGR")
  })
}

module.exports = keepAlive

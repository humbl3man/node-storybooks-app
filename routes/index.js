const express = require('express')
const router = express.Router()

// @desc landing page routes
// @route GET /
router.get('/', (req, res) => {
  res.send('Home')
})

module.exports = router

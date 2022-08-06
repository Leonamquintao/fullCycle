const router = require('express').Router();
const getHealthCheck = require('../../controllers/info');

router.get('/health-check', getHealthCheck);

module.exports = router;

var express = require('express'),
    getSpecificData = require('../../../modules/getSpecificData.js'),
    renderTemplate = require('../../../modules/renderTemplate.js'),
    router = express.Router();

router.get('/', function(req, res) {
    var general = {
        title: 'Settings'
    };
    renderTemplate(res, req, 'admin/settings/show', {}, general, {}, false);
});

module.exports = router;

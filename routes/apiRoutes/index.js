const router = require('express').Router();
const notesRoutes = require('../apiRoutes/notes');
router.use(require('./notes'));

router.use(notesRoutes);

module.exports = router;
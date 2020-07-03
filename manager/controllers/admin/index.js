const { Router } = require('express');
const router = Router();
const ctrl = require('./admin.ctrl');

router.get('/', (req, res) => {
    res.send('admin app');
});

router.get('/users', ctrl.get_users);

router.get('/users/write', ctrl.get_users_write);

router.post('/users/write', ctrl.post_users_write);

module.exports = router;
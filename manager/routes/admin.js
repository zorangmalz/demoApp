const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('admin app');
});

router.get('/users', (_, res) => {
    res.render('admin/users.html', { message: "hello" } // message 란 변수를 템플릿으로 내보낸다.
    );
});

router.get('/users/write', (_, res) => {
    res.render('admin/write.html');
});

router.post('/users/write', (req, res) => {
    res.send(req.body);
});

module.exports = router;
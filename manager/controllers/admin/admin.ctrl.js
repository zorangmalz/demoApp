exports.get_users = (_, res) => {
    res.render('admin/users.html', { message: 'hello' });
}

exports.get_users_write = (_, res) => {
    res.render('admin/write.html');
}

exports.post_users_write = (req, res) => {
    res.send(req.body);
}
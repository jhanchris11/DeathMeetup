
const handleError = require('../helpers/handleError');
const userService = require('../services/userService');
exports.addUser = async (req, res) => {

    let { state, errors } = handleError.withErrorRequest(req);

    if (state) return res.status(400).json({ error: errors.array() });

    try {
        await userService.addUser(req.body);
        res.json({ msg: 'User was added correctly' });

    } catch (error) {
        res.status(400).send('Was there an error');
    }
}
exports.getUserById = async (req, res) => {


    try {
        const user = await userService.getUserById(req.params.userId);
        res.json({ user });

    } catch (error) {
        res.status(400).send('Was there an error');
    }
}
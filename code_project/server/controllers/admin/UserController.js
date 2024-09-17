const UserService = require("../../services/admin/UserService")
require('../../utils/JWT')
const UserController = {
    login: async (req, res) => {
        console.log(req.body)
        const result = await UserService.login(req.body)
        if (result.length == 0) {
            res.send({
                code: '-1',
                error:'用户密码不匹配'
            })
        } else {
            res.send({
                ActionType:'OK'
            })
        }

    }
}

module.exports = UserController
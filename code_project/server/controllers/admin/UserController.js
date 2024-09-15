const UserService = require("../../services/admin/UserService")

const UserController = {
    login: async (req, res) => {
        const result= await UserService.login(req.body)
    }
}

module.exports = UserController
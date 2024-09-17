const jsonwebtoken=  require('jsonwebtoken')

const secret = "kerwin"

const JWT = {
    generate(value, exprires) {
        return jsonwebtoken.sign(value,secret,{expiresIn:exprires})
    },
    verify(token) {
        try {
            return jsonwebtoken.verify(token,secret)
        } catch (error) {
            return false            
        }
    }
}
 
const token= JWT.generate({ username: 'kerwin' }, '10s')
console.log(JWT.verify(token))

setTimeout(() => {
console.log(JWT.verify(token))
}, 11000);
module.exports = JWT
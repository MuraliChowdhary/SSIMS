const zod = require("zod")

const admin = zod.object({
    username:zod.string().email().min(1),
    password:zod.string().min(6)
})


module.exports = {admin}
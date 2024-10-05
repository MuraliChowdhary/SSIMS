const zod = require("zod")

const admin = zod.object({
    username:zod.string().email().min(1),
    password:zod.string().min(6)
})


const validateUser =  zod.object({
    username:zod.string().email().min(1),
    role: zod.enum(['storemanager', 'assistantmanager','departmentmanager','inventorymanager','salesmanager','CSM','securitymanager','FinanceManager','HumanresourceManager','cashier'], "Invalid role"),

})


module.exports = {admin,validateUser}
const zod = require("zod");

// Validation for user creation (password is not required here)
const createUserValidation = zod.object({
    username: zod.string().email().min(1, "Username is required"),
    role: zod.enum(['storemanager', 'assistantmanager','departmentmanager','inventorymanager','salesmanager','CSM','securitymanager','FinanceManager','HumanresourceManager','cashier'], "Invalid role"),
});



const signinValidation = zod.object({
    email: zod.string().email("Invalid email"),
    password: zod.string().min(1, "Password is required"),
    role: zod.enum(['storemanager', 'assistantmanager','departmentmanager','inventorymanager','salesmanager','CSM','securitymanager','FinanceManager','HumanresourceManager','cashier'], "Invalid role"),
});


module.exports = { createUserValidation, signinValidation };

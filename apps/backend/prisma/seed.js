"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const seedData_js_1 = require("./seedData.js");
require("dotenv/config");
const prisma_1 = require("../generated/prisma");
const adapter_pg_1 = require("@prisma/adapter-pg");
const adapter = new adapter_pg_1.PrismaPg({
    connectionString: process.env.DATABASE_URL,
});
const prisma = new prisma_1.PrismaClient({ adapter });
async function main() {
    await prisma.employee.deleteMany();
    await prisma.role.deleteMany();
    const roleMap = {};
    for (const role of seedData_js_1.rolesSeedData) {
        const createdRole = await prisma.role.create({ data: role });
        roleMap[createdRole.name] = createdRole.id;
    }
    for (const emp of seedData_js_1.employeesSeedData) {
        const roleId = roleMap[emp.roleName];
        if (!roleId)
            throw new Error(`Role not found for employee: ${emp.name}`);
        await prisma.employee.create({
            data: {
                name: emp.name,
                email: emp.email,
                roleId,
            },
        });
    }
    console.log("Seeding complete!");
}
main()
    .then(async () => {
    await prisma.$disconnect();
})
    .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});
//# sourceMappingURL=seed.js.map
import { rolesSeedData, employeesSeedData } from "./seedData.js";
import "dotenv/config";
import { PrismaClient } from "../generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.employee.deleteMany();
  await prisma.role.deleteMany();

  const roleMap: Record<string, number> = {};

  for (const role of rolesSeedData) {
    const createdRole = await prisma.role.create({ data: role });
    roleMap[createdRole.name] = createdRole.id;
  }

  for (const emp of employeesSeedData) {
    const roleId = roleMap[emp.roleName];

    if (!roleId) throw new Error(`Role not found for employee: ${emp.name}`);

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
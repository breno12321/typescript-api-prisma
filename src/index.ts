import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

prisma.user.findMany().then((res) => console.log(res));

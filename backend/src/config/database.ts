
import { PrismaClient, Prisma as PrismaTypes } from '../generated/prisma';

import { withAccelerate } from '@prisma/extension-accelerate';

const prisma = new PrismaClient().$extends(withAccelerate());

export { prisma, PrismaTypes };
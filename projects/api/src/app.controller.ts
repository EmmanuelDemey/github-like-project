import { Controller, Get } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  async getHello() {
    const prisma = new PrismaClient();
    await prisma.user.create({
      data: {
        email: 'email@email.org',
      },
    });
    return prisma.user.findMany({
      select: {
        email: true,
        id: false,
      },
    });
  }
}

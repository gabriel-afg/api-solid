import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'

// O tipo Prisma.UserCreateInput ja vem o dados que são estabelecidos no register

export class PrismaUsersRepository {
  async create(data: Prisma.UserCreateInput) {
    const user = await prisma.user.create({
      data,
    })

    return user
  }
}

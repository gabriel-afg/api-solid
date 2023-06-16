import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { RegisterUserCase } from '../register'

export function makeRegiterUseCase() {
  // Caso troque de ferramenta para a inserção do banco é so trocar o repositorio
  const usersRepository = new PrismaUsersRepository()
  const registerUserCase = new RegisterUserCase(usersRepository)

  return registerUserCase
}

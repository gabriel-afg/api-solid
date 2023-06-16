import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { AuthenticateUseCase } from '../authenticate'

export function makeAuthenticateUseCase() {
  // Caso troque de ferramenta para a inserção do banco é so trocar o repositorio
  const usersRepository = new PrismaUsersRepository()
  const authenticateUserCase = new AuthenticateUseCase(usersRepository)

  return authenticateUserCase
}

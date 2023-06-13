// import { PrismaUsersRepository } from '@/repositories/prisma-users-repository'
import { UsersRepository } from '@/repositories/users-repository'
import { hash } from 'bcryptjs'

interface RegisterUserCaseRequest {
  name: string
  email: string
  password: string
}

export class RegisterUserCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({ name, email, password }: RegisterUserCaseRequest) {
    const password_hash = await hash(password, 6)
    // Senha hash não será revertida, porém na autenticação do usuário será efetuada a
    // comparação da senha digitada com a senha hash que será gerada

    const userWithSameEmail = await this.usersRepository.findByEmail(email)

    if (userWithSameEmail) {
      throw new Error('Email already exist')
    }

    // Instanciar a classe que faz a criaçao da tupla no banco
    // const prismaUserRepository = new PrismaUsersRepository()

    await this.usersRepository.create({
      name,
      email,
      password_hash,
    })
  }
}

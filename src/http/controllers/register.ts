import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { RegisterUserCase } from '@/use-cases/register'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { UserAlreadyExistsError } from '@/use-cases/errors/user-already-exists'

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
  })

  const { name, email, password } = registerBodySchema.parse(request.body)

  try {
    // Caso troque de ferramenta para a inserção do banco é so trocar o repositorio
    const usersRepository = new PrismaUsersRepository()
    const registerUserCase = new RegisterUserCase(usersRepository)

    // separar o registro do usuario na rota http
    await registerUserCase.execute({
      name,
      email,
      password,
    })
  } catch (err) {
    if (err instanceof UserAlreadyExistsError) {
      return reply.status(409).send({ message: err.message })
    }

    throw err
  }

  return reply.status(201).send()
}

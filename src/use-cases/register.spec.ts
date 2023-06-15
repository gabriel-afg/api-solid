import { expect, test, describe } from 'vitest'
import { RegisterUserCase } from './register'
import { compare } from 'bcryptjs'

describe('Register Use Case', () => {
  test('Should hash user password upon registration', async () => {
    const registerUserCase = new RegisterUserCase({
      async findByEmail(email) {
        return null
      },

      async create(data) {
        return {
          id: 'user-1',
          name: data.name,
          email: data.email,
          password_hash: data.password_hash,
          created_at: new Date(),
        }
      },
    })

    const { user } = await registerUserCase.execute({
      name: 'John Doe',
      email: 'John.Doe@example.com',
      password: '123456',
    })

    const isPasswordCorrectlyHashed = await compare(
      '123456',
      user.password_hash,
    )

    expect(isPasswordCorrectlyHashed).toBe(true)
  })
})

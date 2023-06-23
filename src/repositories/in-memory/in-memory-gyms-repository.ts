import { Gym } from '@prisma/client'
import { GymsRepository } from '../gyms-repository'

// Este repositorio é para simular um banco de dados na hora de fazer os testes
export class InMemoryGymsRepository implements GymsRepository {
  public items: Gym[] = []

  async findById(id: string) {
    const gym = this.items.find((item) => item.id === id)

    if (!gym) {
      return null
    }

    return gym
  }
}

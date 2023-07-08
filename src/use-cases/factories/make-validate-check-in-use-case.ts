import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-respository'
import { ValidateCheckInUseCase } from '../validate-check-ins'

export function makeValidateCheckInUseCase() {
  const checkInsRepository = new PrismaCheckInsRepository()
  const useCase = new ValidateCheckInUseCase(checkInsRepository)

  return useCase
}

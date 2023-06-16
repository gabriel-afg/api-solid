export class InvalidCredentialsError extends Error {
  constructor() {
    super('Credentials is invalid')
  }
}

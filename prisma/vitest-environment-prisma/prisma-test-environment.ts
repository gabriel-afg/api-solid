import { Environment } from 'vitest'

export default <Environment>{
  name: 'prisma',
  async setup(global, options) {
    console.log('Executou')

    return {
      async teardown() {
        console.log('teardown')
      },
    }
  },
}

import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {

  schema: 'http://localhost:4000/graphql',

  documents: [
    'app/graphql/**/*.ts'
  ],

  generates: {
    './app/graphql/generated.ts': {
      plugins: [
        'typescript',
        'typescript-operations'
      ]
    }
  }

}

export default config

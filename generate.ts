import { loadGraphQLSchemaFromOpenAPI } from '@omnigraph/openapi'
import { printSchema } from 'graphql'
import fs from 'node:fs'

const schema = await loadGraphQLSchemaFromOpenAPI('ariza', {
    source: 'https://ariza.dev.globality.io/api/v1/swagger',
    endpoint: 'https://ariza.dev.globality.io/api/v1',
})

fs.writeFileSync('schema.graphql', printSchema(schema), 'utf8')

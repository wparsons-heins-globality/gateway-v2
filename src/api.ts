import { RESTDataSource } from '@apollo/datasource-rest'
import { User } from './generated/graphql'

// NOTE: This would just be the gloclient
export class ArizaAPI extends RESTDataSource {
    override baseURL = 'https://ariza.dev.globality.io/api/v1/'

    async getUser(id: string): Promise<User> {
        return this.get<User>(`user/${encodeURIComponent(id)}`)
    }
}

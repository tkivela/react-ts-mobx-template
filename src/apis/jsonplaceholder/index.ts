import { IRestStore, RestStoreFactory } from '../../stores/rest'

export interface IJsonPlaceHolderResponse {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export interface IJsonPlaceHolderApi {
  getCommentRest: IRestStore<IJsonPlaceHolderResponse>
  getComment: (commentNumber: number) => Promise<IJsonPlaceHolderResponse> | jest.Mock
}

export default class JsonPlaceHolderApi implements IJsonPlaceHolderApi {
  public getCommentRest: IRestStore<IJsonPlaceHolderResponse> = RestStoreFactory<
    IJsonPlaceHolderResponse
  >()

  public getComment = (commentNumber: number): Promise<IJsonPlaceHolderResponse> | jest.Mock => {
    return this.getCommentRest.get(`https://jsonplaceholder.typicode.com/comments/${commentNumber}`)
  }
}

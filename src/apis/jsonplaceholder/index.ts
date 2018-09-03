import { HttpClientFactory, IHttpClient } from '../../utils/httpclient'

interface IJsonPlaceHolderGetCommentResponse {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export interface IJsonPlaceHolderApi {
  getCommentRest: IHttpClient
  getComment: (commentNumber: number) => Promise<IJsonPlaceHolderGetCommentResponse>
}

export default class JsonPlaceHolderApi implements IJsonPlaceHolderApi {
  public getCommentRest: IHttpClient = HttpClientFactory()

  public getComment = async (
    commentNumber: number
  ): Promise<IJsonPlaceHolderGetCommentResponse> => {
    const res = await this.getCommentRest.get(
      `https://jsonplaceholder.typicode.com/comments/${commentNumber}`
    )
    return res.data
  }
}

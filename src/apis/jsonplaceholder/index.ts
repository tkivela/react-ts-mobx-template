import { HttpClientFactory, IHttpClient } from '../../utils/httpclient'

interface IJsonPlaceHolderGetCommentResponse {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export default class JsonPlaceHolderApi {
  public static getCommentRest: IHttpClient = HttpClientFactory()

  public static getComment = async (
    commentNumber: number
  ): Promise<IJsonPlaceHolderGetCommentResponse> => {
    return JsonPlaceHolderApi.getCommentRest.get(
      `https://jsonplaceholder.typicode.com/comments/${commentNumber}`
    )
  }
}

import { HttpClientFactory, IHttpClient } from '../../utils/httpclient'

export interface IJsonPlaceHolderGetCommentResponse {
  name: string
} // jsonplaceholder response includes also other properties, but we'll declare only those that we need

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

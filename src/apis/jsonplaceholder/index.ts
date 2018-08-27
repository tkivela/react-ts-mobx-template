import axios, { AxiosPromise } from 'axios'

export interface IJsonPlaceHolderResponse {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

const getApiCallUrl = (commentNumber: number): string => {
  return `https://jsonplaceholder.typicode.com/comments/${commentNumber}`
}

export const getComment = (commentNumber: number): AxiosPromise<IJsonPlaceHolderResponse> => {
  return axios.get(getApiCallUrl(commentNumber))
}

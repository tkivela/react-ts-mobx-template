import Axios, { AxiosResponse } from 'axios'

import MockHttpClient from './mock'

export interface IHttpClient {
  del(url: string): Promise<AxiosResponse>
  get(url: string): Promise<AxiosResponse>
  patch(url: string, body: any): Promise<AxiosResponse>
  post(url: string, body: any): Promise<AxiosResponse>
}

export default class HttpClient implements IHttpClient {
  public async del(url: string): Promise<any> {
    return Axios.delete(url)
  }

  public async get(url: string): Promise<any> {
    return Axios.get(url)
  }

  public async patch(url: string, body: any): Promise<any> {
    return Axios.patch(url, body)
  }

  public async post(url: string, body: any): Promise<any> {
    return Axios.post(url, body)
  }
}

export const HttpClientFactory = () => {
  if (process.env && process.env.NODE_ENV && process.env.NODE_ENV === 'test') {
    return new MockHttpClient()
  } else {
    return new HttpClient()
  }
}

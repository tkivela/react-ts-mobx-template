import Axios, { AxiosResponse } from 'axios'

import MockHttpClient from './mock'

export interface IHttpClient<T> {
  del(url: string): Promise<AxiosResponse>
  get(url: string): Promise<AxiosResponse>
  patch(url: string, body: any): Promise<AxiosResponse>
  post(url: string, body: any): Promise<AxiosResponse>
}

export default class HttpClient<T> implements IHttpClient<T> {
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

export const HttpClientFactory = <T>() => {
  if (process.env && process.env.NODE_ENV && process.env.NODE_ENV === 'test') {
    return new MockHttpClient<T>()
  } else {
    return new HttpClient<T>()
  }
}

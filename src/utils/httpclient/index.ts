import wretch from 'wretch'

import MockHttpClient from './mock'

export interface IHttpClient {
  del(url: string): Promise<any>
  get(url: string): Promise<any>
  patch(url: string, body: any): Promise<any>
  post(url: string, body: any): Promise<any>
}

export default class HttpClient implements IHttpClient {
  public async del(url: string): Promise<any> {
    return wretch(url)
      .delete()
      .json()
  }

  public async get(url: string): Promise<any> {
    return wretch(url)
      .get()
      .json()
  }

  public async patch(url: string, body: any): Promise<any> {
    return wretch(url)
      .patch(body)
      .json()
  }

  public async post(url: string, body: any): Promise<any> {
    return wretch(url)
      .post(body)
      .json()
  }
}

export const HttpClientFactory = () => {
  if (process.env && process.env.NODE_ENV && process.env.NODE_ENV === 'test') {
    return new MockHttpClient()
  } else {
    return new HttpClient()
  }
}

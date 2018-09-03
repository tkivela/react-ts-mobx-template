import Axios, { AxiosResponse } from 'axios'
import { action } from 'mobx'

import MockRestStore from './mock'

export interface IRestStore<T> {
  del(url: string): Promise<AxiosResponse>
  get(url: string): Promise<AxiosResponse>
  patch(url: string, body: any): Promise<AxiosResponse>
  post(url: string, body: any): Promise<AxiosResponse>
}

export default class RestStore<T> implements IRestStore<T> {
  @action
  public async del(url: string): Promise<any> {
    return Axios.delete(url)
  }

  @action
  public async get(url: string): Promise<any> {
    return Axios.get(url)
  }

  @action
  public async patch(url: string, body: any): Promise<any> {
    return Axios.patch(url, body)
  }

  @action
  public async post(url: string, body: any): Promise<any> {
    return Axios.post(url, body)
  }
}

export const RestStoreFactory = <T>() => {
  if (process.env && process.env.NODE_ENV && process.env.NODE_ENV === 'test') {
    return new MockRestStore<T>()
  } else {
    return new RestStore<T>()
  }
}

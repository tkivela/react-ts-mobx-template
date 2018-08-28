import Axios, { AxiosResponse } from 'axios'
import { action, observable } from 'mobx'

import MockRestStore from './mock'

export enum ApiStatus {
  INITIALIZED = 'initalized',
  INPROGRESS = 'in-progress',
  SUCCESS = 'success',
  ERROR = 'error'
}

export interface IRestStore<T> {
  status: ApiStatus
  response?: AxiosResponse
  error: any
  data: T
  del(url: string): Promise<T> | jest.Mock
  get(url: string): Promise<T> | jest.Mock
  patch(url: string, body: any): Promise<T> | jest.Mock
  post(url: string, body: any): Promise<T> | jest.Mock
}

export default class RestStore<T> implements IRestStore<T> {
  @observable
  public status: ApiStatus = ApiStatus.INITIALIZED
  @observable
  public response?: AxiosResponse
  @observable
  public error: any
  @observable
  public data: T

  @action
  public async del(url: string): Promise<any> {
    this.startNewRestQuery()
    try {
      return Axios.delete(url)
        .then((res) => {
          this.handleSuccess(res)
          return res
        })
        .catch((error) => {
          this.handleError(error)
        })
    } catch (error) {
      this.handleError(error)
    }
  }

  @action
  public async get(url: string): Promise<any> {
    this.startNewRestQuery()
    try {
      return Axios.get(url)
        .then((res) => {
          this.handleSuccess(res)
          return res
        })
        .catch((error) => {
          this.handleError(error)
        })
    } catch (error) {
      this.handleError(error)
    }
  }

  @action
  public async patch(url: string, body: any): Promise<any> {
    this.startNewRestQuery()
    try {
      return Axios.patch(url, body)
        .then((res) => {
          this.handleSuccess(res)
          return res
        })
        .catch((error) => {
          this.handleError(error)
        })
    } catch (error) {
      this.handleError(error)
    }
  }

  @action
  public async post(url: string, body: any): Promise<any> {
    this.startNewRestQuery()
    try {
      return Axios.post(url, body)
        .then((res) => {
          this.handleSuccess(res)
          return res
        })
        .catch((error) => {
          this.handleError(error)
        })
    } catch (error) {
      this.handleError(error)
    }
  }

  @action.bound
  private startNewRestQuery() {
    this.status = ApiStatus.INPROGRESS
    this.response = undefined
    this.error = undefined
  }

  @action.bound
  private handleSuccess(res) {
    this.response = res
    this.data = res.data as T
    this.status = ApiStatus.SUCCESS
    return res
  }

  @action.bound
  private handleError(error) {
    this.error = error
    this.status = ApiStatus.ERROR
    delete this.data
    throw error
  }
}

export const RestStoreFactory = <T>() => {
  if (process.env && process.env.NODE_ENV && process.env.NODE_ENV === 'test') {
    return new MockRestStore<T>()
  } else {
    return new RestStore<T>()
  }
}

import { AxiosResponse } from 'axios'

import { ApiStatus, IRestStore } from '../'

export default class MockRestStore<T> implements IRestStore<T> {
  public status: ApiStatus = ApiStatus.INITIALIZED
  public response?: AxiosResponse
  public error: any
  public data: T
  public del: () => any
  public get: () => any
  public patch: () => any
  public post: () => any

  constructor() {
    const httpMethodMock = jest.fn()
    httpMethodMock.mockImplementation(() => {
      throw new Error('Mock called more times test defined responses')
    })
    this.del = httpMethodMock
    this.get = httpMethodMock
    this.patch = httpMethodMock
    this.post = httpMethodMock
  }
}

export const okResponse = (data: any): AxiosResponse<any> => ({
  data,
  status: 200,
  statusText: 'Ok',
  headers: {},
  config: {}
})

export const errorResponse = (status: number, data: any): AxiosResponse<any> => ({
  data,
  status,
  statusText: 'Error occured',
  headers: {},
  config: {}
})

export const setMockRestStoreOkStatus = (restStore: IRestStore<any>, data: any) => {
  restStore.status = ApiStatus.SUCCESS
  restStore.data = data
  return okResponse(data)
}

export const setMockRestStoreErrorStatus = (
  restStore: IRestStore<any>,
  data: any,
  status: number
) => {
  restStore.status = ApiStatus.ERROR
  delete restStore.data
  return errorResponse(status, data)
}

import { AxiosResponse } from 'axios'

import { IRestStore } from '../'

export default class MockRestStore<T> implements IRestStore<T> {
  public del: () => any
  public get: () => any
  public patch: () => any
  public post: () => any

  constructor() {
    const httpMethodMock = jest.fn()
    httpMethodMock.mockImplementation(() => {
      throw new Error('Error: Mock called more times than test defined responses.')
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

export const setMockRestStoreOkStatus = (restStore: IRestStore<any>, data: any) => {
  return okResponse(data)
}

export const setMockRestStoreErrorStatus = (data: any, status: number) => {
  throw {
    data,
    status,
    statusText: 'Error occured',
    headers: {},
    config: {}
  }
}

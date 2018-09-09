import { IHttpClient } from '../'

export default class MockHttpClient implements IHttpClient {
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

export const setMockHttpClientOkStatus = (data: any) => {
  return data
}

export const setMockHttpClientErrorStatus = (data: any, status: number) => {
  throw {
    message: data,
    response: {
      ok: false,
      status,
      statusText: data
    },
    status,
    text: data
  }
}

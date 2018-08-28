import JsonPlaceHolderApi, { IJsonPlaceHolderApi } from '../../apis/jsonplaceholder'
import { setMockRestStoreOkStatus } from '../rest/mock'
import NotesStore from './index'

describe('NotesStore', () => {
  let jsonPlaceHolderApi: IJsonPlaceHolderApi

  beforeEach(() => {
    jsonPlaceHolderApi = new JsonPlaceHolderApi() // Rest endpoints are automatically using MockRestStore when run under test -env variable
  })

  it('addCounterNote should add new note to notes array beginning', () => {
    const store = new NotesStore()

    // #region Init mock api call results
    const restEndpoint = jsonPlaceHolderApi.getCommentRest.get as jest.Mock
    const apiResponseData = {
      postId: 52,
      id: 259,
      name: 'animi minima ducimus tempore officiis qui',
      email: 'Hoyt_Dickens@napoleon.ca',
      body: 'itaque occaecati non aspernatu'
    }
    restEndpoint.mockImplementationOnce(() => {
      return setMockRestStoreOkStatus(jsonPlaceHolderApi.getCommentRest, apiResponseData)
    })
    // #endregion

    expect(store.counter).toEqual(0)
    // expect(store.notes).toEqual([]) // Skip until https://github.com/facebook/jest/issues/6392 is resolved
    store.addCounterNote()
    expect(store.counter).toEqual(1)
    expect(store.notes.length).toEqual(1)
    expect(store.notes[0].title).toEqual('Counter: 1')
    store.addCounterNote()
    expect(store.counter).toEqual(2)
    expect(store.notes.length).toEqual(2)
    expect(store.notes[0].title).toEqual('Counter: 2')
  })

  it('addLatinNoteAsync should add new note to notes array beginning', async () => {
    const store = new NotesStore()

    expect(store.counter).toEqual(0)
    // expect(store.notes).toEqual([]) // Skip until https://github.com/facebook/jest/issues/6392 is resolved
    await store.addLatinNoteAsync()
    expect(store.counter).toEqual(0)
    expect(store.notes.length).toEqual(1)
    await store.addLatinNoteAsync()
    expect(store.notes.length).toEqual(2)
  })
})

import { setMockRestStoreErrorStatus, setMockRestStoreOkStatus } from '../rest/mock'
import NotesStore from './index'

describe('NotesStore', () => {
  let store: NotesStore

  beforeEach(() => {
    store = new NotesStore() // Rest endpoints are automatically using MockRestStore when run under test -env variable
  })

  it('addCounterNote should add new note to notes array beginning', () => {
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
    const jsonPlaceHolderApi = store.jsonPlaceHolderApi
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

    const apiResponseData2 = {
      postId: 42,
      id: 200,
      name: 'quoa sade qui',
      email: 'WAxl@rose.ca',
      body: 'Nosferatu'
    }
    restEndpoint.mockImplementationOnce(() => {
      return setMockRestStoreOkStatus(jsonPlaceHolderApi.getCommentRest, apiResponseData2)
    })

    // #endregion

    expect(store.counter).toEqual(0)
    expect(jsonPlaceHolderApi.getCommentRest.get).toHaveBeenCalledTimes(0)
    // expect(store.notes).toEqual([]) // Skip until https://github.com/facebook/jest/issues/6392 is resolved
    await store.addLatinNoteNumberAsync(42)
    await store.addLatinNoteNumberAsync(52)
    expect(jsonPlaceHolderApi.getCommentRest.get).toHaveBeenCalledTimes(2)
    expect(store.notes.length).toEqual(2)
    expect(store.notes[0].title).toEqual('quoa sade qui')
    expect(store.notes[1].title).toEqual('animi minima ducimus tempore officiis qui')
    expect(store.counter).toEqual(0)

    expect(jsonPlaceHolderApi.getCommentRest.get).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/comments/42'
    )
    expect(jsonPlaceHolderApi.getCommentRest.get).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/comments/52'
    )
  })

  it('addLatinNoteAsync creates an error note incase api call fails', async () => {
    const jsonPlaceHolderApi = store.jsonPlaceHolderApi
    // #region Init mock api call results
    const restEndpoint = jsonPlaceHolderApi.getCommentRest.get as jest.Mock
    const apiResponseData = {
      error: 'Some error occured here in our server'
    }
    restEndpoint.mockImplementationOnce(() => {
      return setMockRestStoreErrorStatus(apiResponseData, 500)
    })
    // #endregion

    await store.addLatinNoteNumberAsync(52)
    expect(jsonPlaceHolderApi.getCommentRest.get).toHaveBeenCalledTimes(1)
    expect(store.notes.length).toEqual(1)
    expect(store.notes[0].title).toEqual('Error fetching note from web')
    expect(store.counter).toEqual(0)
  })
})

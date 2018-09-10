import { when } from 'mobx'

import JsonPlaceHolderApi from '../../apis/jsonplaceholder'
import { HttpClientFactory } from '../../utils/httpclient'
import {
  setMockHttpClientErrorStatus,
  setMockHttpClientOkStatus
} from '../../utils/httpclient/mock'
import NotesStore from './index'

describe('NotesStore', () => {
  let store: NotesStore

  beforeEach(() => {
    store = new NotesStore() // Rest endpoints are automatically using MockRestStore when run under test -env variable
    JsonPlaceHolderApi.getCommentRest = HttpClientFactory() // Reset rest endpoint so we get correct toHaveBeenCalledTimes
  })

  it('addCounterNote should add new note to notes array beginning', async () => {
    expect(store.counter).toEqual(0)
    // expect(store.notes).toEqual([]) // Skip until https://github.com/facebook/jest/issues/6392 is resolved
    store.addCounterNote()
    expect(store.counter).toEqual(1)
    expect(store.notes.length).toEqual(1)

    store.addCounterNote()
    expect(store.counter).toEqual(2)
    expect(store.notes.length).toEqual(2)

    when(
      () =>
        store.notes[0].content.state !== 'pending' && store.notes[1].content.state !== 'pending',
      () => {
        expect(store.notes[1].content.state).toEqual('fulfilled')
        expect(store.notes[1].content.value.name).toEqual('Counter: 1')
      }
    )

    when(
      () =>
        store.notes[0].content.state !== 'pending' && store.notes[1].content.state !== 'pending',
      () => {
        expect(store.notes[0].content.state).toEqual('fulfilled')
        expect(store.notes[0].content.value.name).toEqual('Counter: 2')
      }
    )
  })

  it('addLatinNoteAsync should add new note to notes array beginning', async () => {
    const restEndpoint = JsonPlaceHolderApi.getCommentRest.get as jest.Mock
    const apiResponseData = {
      postId: 52,
      id: 259,
      name: 'animi minima ducimus tempore officiis qui',
      email: 'Hoyt_Dickens@napoleon.ca',
      body: 'itaque occaecati non aspernatu'
    }
    restEndpoint.mockImplementationOnce(() => {
      return setMockHttpClientOkStatus(apiResponseData)
    })

    const apiResponseData2 = {
      postId: 42,
      id: 200,
      name: 'quoa sade qui',
      email: 'WAxl@rose.ca',
      body: 'Nosferatu'
    }
    restEndpoint.mockImplementationOnce(() => {
      return setMockHttpClientOkStatus(apiResponseData2)
    })

    // #endregion

    expect(store.counter).toEqual(0)
    expect(JsonPlaceHolderApi.getCommentRest.get).toHaveBeenCalledTimes(0)
    // expect(store.notes).toEqual([]) // Skip until https://github.com/facebook/jest/issues/6392 is resolved
    await store.addLatinNoteNumberAsync(42)
    await store.addLatinNoteNumberAsync(52)
    expect(JsonPlaceHolderApi.getCommentRest.get).toHaveBeenCalledTimes(2)
    expect(store.notes.length).toEqual(2)
    expect(store.counter).toEqual(0)

    expect(JsonPlaceHolderApi.getCommentRest.get).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/comments/42'
    )
    expect(JsonPlaceHolderApi.getCommentRest.get).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/comments/52'
    )

    when(
      () =>
        store.notes[0].content.state !== 'pending' && store.notes[1].content.state !== 'pending',
      () => {
        expect(store.notes[0].content.state).toEqual('fulfilled')
        expect(store.notes[0].content.value.name).toEqual('quoa sade qui')

        expect(store.notes[1].content.state).toEqual('fulfilled')
        expect(store.notes[1].content.value.name).toEqual(
          'animi minima ducimus tempore officiis qui'
        )
      }
    )
  })

  it('addLatinNoteAsync creates an error note incase api call fails', async (done) => {
    // #region Init mock api call results
    const restEndpoint = JsonPlaceHolderApi.getCommentRest.get as jest.Mock
    const apiResponseData = {
      error: 'Some error occured here in our server'
    }
    restEndpoint.mockImplementationOnce(() => {
      return setMockHttpClientErrorStatus(apiResponseData, 500)
    })
    // #endregion

    await store.addLatinNoteNumberAsync(52)
    expect(JsonPlaceHolderApi.getCommentRest.get).toHaveBeenCalledTimes(1)
    expect(store.notes.length).toEqual(1)
    expect(store.counter).toEqual(0)

    when(
      () => store.notes[0].content.state !== 'pending',
      () => {
        expect(store.notes[0].content.state).toEqual('rejected')
        done()
      }
    )
  })
})

import { action, computed, observable } from 'mobx'
import { fromPromise, IPromiseBasedObservable } from 'mobx-utils'

import { RootStore } from '../'
import JsonPlaceHolderApi, { IJsonPlaceHolderGetCommentResponse } from '../../apis/jsonplaceholder'

interface INoteColor {
  r: number
  g: number
  b: number
}

export interface INote {
  id: string
  color: INoteColor
  content: IPromiseBasedObservable<IJsonPlaceHolderGetCommentResponse>
}

const getRandomColor = (): INoteColor => {
  const color = Math.floor(Math.random() * 100) + 140

  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return { r: color, g: color, b: color - 50 }
    case 1:
      return { r: color, g: color - 50, b: color }
    case 2:
      return { r: color - 50, g: color, b: color }
    default:
      return { r: 0, g: 0, b: 0 }
  }
}

export default class NotesStore {
  @observable
  public rootStore: RootStore

  @observable
  public counter: number = 0
  @observable
  public notes: INote[] = []

  @computed
  get notescount() {
    return this.notes.length
  }

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }

  @action
  public addCounterNote() {
    this.counter += 1
    const note = {
      id: new Date().getTime().toString(),
      color: getRandomColor(),
      content: fromPromise<IJsonPlaceHolderGetCommentResponse>(
        Promise.resolve({
          name: 'Counter: ' + this.counter
        })
      )
    }
    this.rootStore.notificationsStore.addErrorNotification('Andyy!')
    this.addNoteToArray(note)
  }

  @action
  public async addLatinNoteAsync() {
    const commentNumber = Math.floor(Math.random() * 500) + 1 // randomize comment number (1..500)
    this.addLatinNoteNumberAsync(commentNumber)
  }

  @action
  public async addLatinNoteNumberAsync(commentNumber: number): Promise<INote | null> {
    try {
      const content = fromPromise(JsonPlaceHolderApi.getComment(commentNumber))
      const note: INote = {
        id: new Date().getTime().toString(),
        color: getRandomColor(),
        content
      }
      this.addNoteToArray(note)
      await content // We await content because if we have an error there, catch block will handle it here
      return note
    } catch (error) {
      this.rootStore.notificationsStore.addErrorNotification('Error getting note from API!')
    }
    return null
  }

  @action
  private addNoteToArray(note: INote) {
    this.notes.unshift(note)
  }
}

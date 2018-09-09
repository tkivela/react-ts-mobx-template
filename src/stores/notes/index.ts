import { action, computed, observable } from 'mobx'

import JsonPlaceHolderApi from '../../apis/jsonplaceholder'

interface INoteColor {
  r: number
  g: number
  b: number
}

export interface INote {
  id: string
  title: string
  color: INoteColor
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
  public counter: number = 0
  @observable
  public notes: INote[] = []

  @computed
  get notescount() {
    return this.notes.length
  }

  @action
  public addCounterNote() {
    this.addBy(1)
    this.addNoteToArray('Counter: ' + this.counter, getRandomColor())
  }

  @action
  public async addLatinNoteAsync() {
    const commentNumber = Math.floor(Math.random() * 500) + 1 // randomize comment number (1..500)
    this.addLatinNoteNumberAsync(commentNumber)
  }

  @action
  public async addLatinNoteNumberAsync(commentNumber: number) {
    try {
      const comment = await JsonPlaceHolderApi.getComment(commentNumber)
      this.addNoteToArray(comment.name, getRandomColor())
    } catch (error) {
      // Here we could handle for example specific error codes from error.status
      this.addErrorNote()
    }
  }

  @action
  public async addErrorNote() {
    this.addNoteToArray('Error fetching note from web', {
      r: 250,
      g: 0,
      b: 0
    })
  }

  @action
  private addBy(delta: number) {
    this.counter += delta
  }

  @action
  private addNoteToArray(title: string, color: INoteColor) {
    const id = new Date().getTime().toString()
    this.notes.unshift({ id, title, color })
  }
}

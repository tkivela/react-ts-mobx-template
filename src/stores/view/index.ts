import { action, observable } from 'mobx'

export enum VIEW {
  NOTES = 'notes',
  NOTECOUNT = 'notecount'
}

export default class ViewStore {
  @observable
  public currentView: VIEW = VIEW.NOTES

  @action
  public showNotesView() {
    this.currentView = VIEW.NOTES
  }

  @action
  public showNoteCountView() {
    this.currentView = VIEW.NOTECOUNT
  }
}

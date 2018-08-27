import NotesStore from './notes/index'

class RootStore {
  public notesStore: NotesStore

  constructor() {
    this.notesStore = new NotesStore()
  }
}

export default new RootStore()
export { NotesStore }

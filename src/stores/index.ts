import NotesStore from './notes/index'
import ViewStore from './view'

class RootStore {
  public notesStore: NotesStore
  public viewStore: ViewStore

  constructor() {
    this.notesStore = new NotesStore()
    this.viewStore = new ViewStore()
  }
}

export default new RootStore()
export { NotesStore, ViewStore }

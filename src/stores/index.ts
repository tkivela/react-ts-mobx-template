import NotesStore from './notes/index'
import NotificationsStore from './notifications'
import ViewStore from './view'

class RootStore {
  public notesStore: NotesStore
  public viewStore: ViewStore
  public notificationsStore: NotificationsStore

  constructor() {
    this.notesStore = new NotesStore(this)
    this.notificationsStore = new NotificationsStore()
    this.viewStore = new ViewStore()
  }
}

export default new RootStore()
export { NotesStore, NotificationsStore, RootStore, ViewStore }

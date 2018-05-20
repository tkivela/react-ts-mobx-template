import { RouterStore } from 'mobx-react-router'

import AppStore from './app/index'

class RootStore {
  public appStore: AppStore
  public routingStore: RouterStore

  constructor() {
    this.appStore = new AppStore()
    this.routingStore = new RouterStore()
  }
}

export default new RootStore()
export { AppStore, RouterStore }

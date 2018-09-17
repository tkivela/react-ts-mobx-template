import { action } from 'mobx'
import Alert from 'react-s-alert'

export default class NotificationsStore {
  @action
  public addErrorNotification(message: string) {
    Alert.error(message, {
      position: 'top-right',
      effect: 'bouncyflip',
      timeout: 2500
    })
  }
}

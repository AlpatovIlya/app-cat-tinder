import {makeAutoObservable} from 'mobx';
import {User} from '../models';

class AccountStore {
  user?: User;

  constructor() {
    makeAutoObservable(this);
  }
}

export default AccountStore;

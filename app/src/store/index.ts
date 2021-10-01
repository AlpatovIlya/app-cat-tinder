import AccountStore from './AccountStore';
import SwiperPetsStore from './SwiperPetsStore';

class MainStore {
  AccountStore: AccountStore;
  SwiperPetsStore: SwiperPetsStore;

  constructor() {
    this.AccountStore = new AccountStore();
    this.SwiperPetsStore = new SwiperPetsStore();
  }
}

const mainStore = new MainStore();

export default mainStore;

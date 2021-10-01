import {makeAutoObservable} from 'mobx';
import {Pet} from '../models';
import {petService} from '../services';

class SwiperPetsStore {
  items: Pet[] = [];
  liked: Pet[] = [];
  unLiked: Pet[] = [];
  isLoading: boolean = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async findAll() {
    this.isLoading = true;
    try {
      this.items = await petService.findAll();
    } catch (e) {
      this.error = e.message;
    }
    this.isLoading = false;
  }
}

export default SwiperPetsStore;

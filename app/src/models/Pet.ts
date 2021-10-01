import {IPet} from '../types/interfaces';

class Pet implements IPet {
  id: number;
  userId: number;
  name: string;
  photos: string[];
  likes: number;
  isLike: boolean;
  constructor(data: IPet) {
    this.id = data.id;
    this.userId = data.userId;
    this.name = data.name;
    this.photos = data.photos;
    this.likes = data.likes;
    this.isLike = data.isLike;
  }
}

export default Pet;

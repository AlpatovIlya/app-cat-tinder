import {IUser} from '../types/interfaces';

class User implements IUser {
  id: number;
  name: string;
  photo: string;
  petsId: number[];

  constructor(data: IUser) {
    this.id = data.id;
    this.name = data.name;
    this.photo = data.photo;
    this.petsId = data.petsId;
  }
}

export default User;

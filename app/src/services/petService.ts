import DB from '../../database/DB.json';
import {TIME_DELAY} from '../constants';
import {Pet, User} from '../models';

const findAll = (): Promise<Pet[]> => {
  return new Promise(res => {
    setTimeout(() => {
      const data: Pet[] = DB.Pets;
      res(data);
    }, TIME_DELAY);
  });
};

const findUserByPet = (pet: Pet): Promise<User | null> => {
  return new Promise(res => {
    setTimeout(() => {
      const users: User[] = DB.users;
      const user = users.find(u => u.id === pet.userId) || null;
      res(user);
    }, TIME_DELAY);
  });
};

export default {findAll, findUserByPet};

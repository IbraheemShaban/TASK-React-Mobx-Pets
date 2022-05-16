import { makeAutoObservable } from 'mobx';
import petsData from '../petsData.js';

class PetStore {
  constructor() {
    makeAutoObservable(this);
  }
  pets = petsData;

  handleAdopt = (petId) =>
    (this.pets = this.pets.filter((pet) => pet.id !== petId));
}

const petStore = new PetStore();
export default petStore;

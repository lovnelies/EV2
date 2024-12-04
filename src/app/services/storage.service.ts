import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  async setItem(key: string, value: any): Promise<void> {
    await this._storage?.set(key, value);
  }

  async getItem(key: string): Promise<any> {
    return await this._storage?.get(key);


  }
  async removeItem(key: string): Promise<void> {
    await this._storage?.remove(key);
  }

}
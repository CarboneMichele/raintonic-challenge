import { Injectable } from '@angular/core';
import { LocalStorageItem } from 'src/app/shared/models/local-storage.model';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {
    constructor() {}

    public setItem(item: LocalStorageItem): void {
        const { itemKey, content } = item;
        localStorage.setItem(itemKey, JSON.stringify(content));
    }

    public getItem(itemKey: string): any {
        const localStorageElement = localStorage.getItem(itemKey);
        return localStorageElement ? JSON.parse(localStorageElement) : null;
    }
}

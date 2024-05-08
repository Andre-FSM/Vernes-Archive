import { Injectable } from '@angular/core';
import { booksInfo, books } from './books';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  books: booksInfo[] = books;

  getAll() {
    return this.books;
  }

  getOne(booksId: number) {
    return this.books.find(books => books.id === booksId);
  }

}
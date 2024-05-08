import { Component, OnInit } from '@angular/core';
import { booksInfo } from '../books';
import { MainService } from '../main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  books: booksInfo[] | undefined;

  constructor(
    private mainService: MainService
  ) {}

  ngOnInit(): void {
    this.books = this.mainService.getAll();
  }
}

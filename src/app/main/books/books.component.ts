import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';
import { booksInfo } from '../../books';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {
  books: booksInfo | undefined;

  constructor(
    private mainService: MainService,
    private route: ActivatedRoute 
  ) {}

  ngOnInit(): void {
    console.log(`oi`);
    const routeParams = this.route.snapshot.paramMap;
    const booksId = Number(routeParams.get("id"));
    this.books = this.mainService.getOne(booksId);
  }
}

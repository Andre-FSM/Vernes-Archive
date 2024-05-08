import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { BooksComponent } from './books/books.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: ':id', component: BooksComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

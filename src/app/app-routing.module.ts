import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VigenereCipherComponent } from './codecopy/vigenere-cipher.component';

const routes: Routes = [
  { path: 'codecopy', component: VigenereCipherComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

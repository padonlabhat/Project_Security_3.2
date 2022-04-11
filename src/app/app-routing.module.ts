import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VigenereCipherComponent } from './codecopy/vigenere-cipher.component';
import { RSADEComponent } from './rsa-de/rsa-de.component';
import { RSAENComponent } from './rsa-en/rsa-en.component'; 
const routes: Routes = [
  { path: 'codecopy', component: VigenereCipherComponent},
  { path: 'rsaen', component: RSAENComponent},
  { path: 'rsade', component: RSADEComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

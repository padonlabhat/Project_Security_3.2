import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VigenereCipherComponent } from './codecopy/vigenere-cipher.component';
import { RSADEComponent } from './rsa-de/rsa-de.component';
import { RSAENComponent } from './rsa-en/rsa-en.component'; 
import { MonoalphabeticCipherENComponent } from './monoalphabetic-cipher-en/monoalphabetic-cipher-en.component';
import { MonoalphabeticCipherDEComponent } from './monoalphabetic-cipher-de/monoalphabetic-cipher-de.component';
import { ShiftCipherDEComponent } from './shift-cipher-de/shift-cipher-de.component';
import { ShiftCipherENComponent } from './shift-cipher-en/shift-cipher-en.component';
import { VigenereCipherENComponent } from './vigenere-cipher-en/vigenere-cipher-en.component';
import { VigenereCipherDEComponent } from './vigenere-cipher-de/vigenere-cipher-de.component';
const routes: Routes = [
  { path: 'codecopy', component: VigenereCipherComponent},

  { path: 'rsa-en', component: RSAENComponent},
  { path: 'rsa-de', component: RSADEComponent},

  { path: 'monoalphabetic-en', component: MonoalphabeticCipherENComponent},
  { path: 'monoalphabetic-de', component: MonoalphabeticCipherDEComponent},

  { path: 'shift-de', component: ShiftCipherDEComponent },
  { path: 'shift-ed', component: ShiftCipherENComponent},

  { path: 'vigenere-en', component: VigenereCipherENComponent },
  { path: 'vigenere-de', component: VigenereCipherDEComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

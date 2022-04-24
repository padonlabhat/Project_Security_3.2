import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodecopyComponent } from './codecopy/codecopy.component';
import { RSAENComponent } from './rsa-en/rsa-en.component';
import { RSADEComponent } from './rsa-de/rsa-de.component';
import { MonoalphabeticCipherENComponent } from './monoalphabetic-cipher-en/monoalphabetic-cipher-en.component';
import { MonoalphabeticCipherDEComponent } from './monoalphabetic-cipher-de/monoalphabetic-cipher-de.component';
import { ShiftCipherDEComponent } from './shift-cipher-de/shift-cipher-de.component';
import { ShiftCipherENComponent } from './shift-cipher-en/shift-cipher-en.component';
import { VigenereCipherENComponent } from './vigenere-cipher-en/vigenere-cipher-en.component';
import { VigenereCipherDEComponent } from './vigenere-cipher-de/vigenere-cipher-de.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CodecopyComponent,
    RSAENComponent,
    RSADEComponent,
    MonoalphabeticCipherENComponent,
    MonoalphabeticCipherDEComponent,
    ShiftCipherDEComponent,
    ShiftCipherENComponent,
    VigenereCipherENComponent,
    VigenereCipherDEComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,FormsModule,ReactiveFormsModule, HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

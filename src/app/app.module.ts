import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginSudComponent } from './login-sud/login-sud.component';
import { FormsModule } from '@angular/forms';
import { SignComponent } from './sign/sign.component';
import { InscritComponent } from 'src/app/inscrit/inscrit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginSudComponent,
    SignComponent,
    InscritComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

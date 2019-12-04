import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { ProductService } from './products/product.service';
import { HomeComponent } from './home/home.component';
import { ProductModule } from './products/product.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component:HomeComponent},
      {path: '', redirectTo: 'home', pathMatch:'full'},
      {path: '**', redirectTo: 'home', pathMatch:'full'}
    ]),
    HttpClientModule,
    ProductModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

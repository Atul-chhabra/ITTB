import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../header/header.component';
import { PageBannerComponent} from '../page-banner/page-banner.component'

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent,HeaderComponent, PageBannerComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

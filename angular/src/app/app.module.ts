import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { StarComponent } from './components/star/star.component';
import { PrependPipe } from './custom-pipes/prepend.pipes';

@NgModule({
  declarations: [ //used for declaring components and pipes
    AppComponent, HeroListComponent, StarComponent, PrependPipe
  ],
  imports: [ //used for importing OTHER modules
    BrowserModule,
    FormsModule
  ],
  providers: [], //used for services
  bootstrap: [AppComponent] //first component that is loaded (like a first responder)
})
export class AppModule { }

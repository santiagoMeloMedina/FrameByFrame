import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedComponent } from './component/feed/feed.component';
import { MenuComponent } from './component/menu/menu.component';
import { FrontComponent } from './component/feed/front/front.component';
import { AboutComponent } from './component/feed/about/about.component';
import { WorkComponent } from './component/feed/work/work.component';
import { ContactComponent } from './component/feed/contact/contact.component';
import { ClientsComponent } from './component/feed/clients/clients.component';
import { InformationComponent } from './component/feed/information/information.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    MenuComponent,
    FrontComponent,
    AboutComponent,
    WorkComponent,
    ContactComponent,
    ClientsComponent,
    InformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

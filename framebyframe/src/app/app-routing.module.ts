import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from 'src/app/component/feed/feed.component';
import { MainComponent } from 'src/app/component/main/main.component';
import { PortafolioComponent } from 'src/app/component/portafolio/portafolio.component';
import { AboutComponent } from './component/feed/about/about.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "",
        component: FeedComponent
      }
    ]
  },
  {
    path: "work",
    component: PortafolioComponent
  },
  {
    path: "about",
    component: AboutusComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

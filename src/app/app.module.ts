import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { UsersComponent } from './users/users.component';
import { CommunicationService } from './communication.service';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ColorPipe } from './app.color';

const appRoutes: Routes = [
  {path: 'clients', component: UsersComponent},
  {path: 'news', component: NewsComponent}
  {path: '', component: NewsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    UsersComponent,
    ColorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    ),
    NgbModule
  ],
  providers: [
    CommunicationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

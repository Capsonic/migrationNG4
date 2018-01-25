import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';

//APPS
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

//WIDGETS

//SERVICES
import { LoginService } from '../services/login.service';

//COMPONENTS
import { LoginComponent } from '../components/login/login';
import { UsersComponent } from '../components/users/users-component';
import { FooterComponent } from '../components/footer/footer-component';

//PROVIDERS
import { UserServiceProvider } from '../providers/user-service';
import { UserFormComponent } from '../components/user-form/user-form-component';
import { UsersPage } from '../pages/users/users-page';


@NgModule({
  declarations: [
    MyApp,
    //PAGES
    HomePage,
    UsersPage,
    //COMPONENTS
    LoginComponent,
    UsersComponent,
    UserFormComponent,
    FooterComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    CommonModule,
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //PAGES
    HomePage,
    UsersPage,
    //COMPONENTS
    LoginComponent,
    UsersComponent,
    UserFormComponent,
    FooterComponent
  ],
  
  providers: [
    LoginService,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UserServiceProvider
  ]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';

//APPS
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

//WIDGETS

//SERVICES
import { LoginService } from '../services/login.service';

//COMPONENTS
import { LoginComponent } from '../components/login/login';
import { UsersComponent } from '../components/users/users';

//PROVIDERS
import { FirstServiceProvider } from '../providers/first-service';
import { UserServiceProvider } from '../providers/user-service';
import { SecondServiceProvider } from '../providers/second-service';
import { UserFormComponent } from '../components/user-form/user-form';
import { UsersPage } from '../pages/users/users';


@NgModule({
  declarations: [
    MyApp,
    //Pages
    HomePage,
    ListPage,
    UsersPage,
    //Components
    LoginComponent,
    UsersComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    CommonModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    UsersPage,
    LoginComponent,
    UsersComponent,
    UserFormComponent
  ],
  providers: [
    LoginService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirstServiceProvider,
    UserServiceProvider,
    SecondServiceProvider
  ]
})
export class AppModule {}

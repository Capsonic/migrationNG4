import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';

//APPS
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

//WIDGETS
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ToastModule} from 'ng2-toastr/ng2-toastr';

//SERVICES
import { LoginService } from '../services/login.service';
import { InterceptorService } from '../services/interceptor.service';

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
    ToastModule.forRoot()
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
    StatusBar,
    SplashScreen,
    LoginService,
    InterceptorService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirstServiceProvider,
    UserServiceProvider,
    SecondServiceProvider
  ]
})
export class AppModule {}

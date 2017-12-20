import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { HttpModule, Http } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';

//APPS
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

//WIDGETS
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//SERVICES
import { LoginService } from './services/login.service';
import { InterceptorService } from './services/interceptor.service';


//COMPONENTS
import { LoginComponent } from '../components/login/login';


@NgModule({
  declarations: [
    MyApp,
    //Pages
    HomePage,
    ListPage,
    //Components
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LoginService,
    InterceptorService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    { provide: Http, useClass: InterceptorService }
  ]
})
export class AppModule {}

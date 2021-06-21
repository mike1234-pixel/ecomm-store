import { environment } from 'src/environments/environment';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgRedux, NgReduxModule, DevToolsExtension } from 'ng2-redux';
import { IAppState, rootReducer } from './store';
import { INITIAL_STATE } from './store';
//import { AngularFireModule } from 'angularfire2'
//import { AngularFireDatabaseModule } from 'angularfire2/database'
// import { AngularFireAuthModule } from 'angularfire2/auth'
import { MatComponentsModule } from './mat-components.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavigationComponent,
  ],
  imports: [
    BrowserModule,
    //AngularFireModule.initializeApp(environment.firebase),
    //AngularFireDatabaseModule,
    // AngularFireAuthModule,
    AppRoutingModule,
    MatComponentsModule,
    BrowserAnimationsModule,
    NgReduxModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {
    // pass root reducer and initial store as config
    const enhancers = isDevMode() ? [devTools.enhancer()] : []

    ngRedux.configureStore(rootReducer, INITIAL_STATE, [], enhancers)
  }

 }

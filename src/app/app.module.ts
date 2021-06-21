import { environment } from 'src/environments/environment';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgRedux, NgReduxModule, DevToolsExtension } from 'ng2-redux';
import { IAppState, rootReducer } from './store';
import { INITIAL_STATE } from './store';
import { RouterModule } from '@angular/router';
//import { AngularFireModule } from 'angularfire2'
//import { AngularFireDatabaseModule } from 'angularfire2/database'
// import { AngularFireAuthModule } from 'angularfire2/auth'
import { MatComponentsModule } from './mat-components.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { HomeComponent } from './pages/home/home.component';
import { PaintingComponent } from './pages/painting/painting.component'
import { DrawingComponent } from './pages/drawing/drawing.component';
import { CanvasComponent } from './pages/canvas/canvas.component';
import { SurfacesComponent } from './pages/surfaces/surfaces.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { StoresComponent } from './pages/stores/stores.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    MainNavigationComponent,
    HomeComponent,
    DrawingComponent,
    CanvasComponent,
    SurfacesComponent,
    BlogComponent,
    StoresComponent,
    ContactComponent,
    BlogPostComponent,
    NotFoundComponent,
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
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'painting', component: PaintingComponent},
      { path: 'drawing', component: DrawingComponent},
      { path: 'canvas', component: CanvasComponent},
      { path: 'surfaces', component: SurfacesComponent},
      // more specific routes go first
      { path: 'blog/:blogpost', component: BlogPostComponent},
      { path: 'blog', component: BlogComponent},
      { path: 'stores', component: StoresComponent},
      { path: 'contact', component: ContactComponent},
      { path: '**', component: NotFoundComponent},
      

    ])
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

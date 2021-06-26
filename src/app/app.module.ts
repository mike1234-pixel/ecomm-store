import { environment } from 'src/environments/environment';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// ---------------------------------------------- redux
import { NgRedux, NgReduxModule, DevToolsExtension } from 'ng2-redux';
import { IAppState, rootReducer } from './store';
import { INITIAL_STATE } from './store';
// ---------------------------------------------- router
import { RouterModule } from '@angular/router';
// ---------------------------------------------- firebase
import { AngularFireModule } from '@angular/fire'
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { AngularFireAuthModule } from '@angular/fire/auth'
// ---------------------------------------------- angular material
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
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { OrderSuccessComponent } from './pages/order-success/order-success.component';
import { MyOrdersComponent } from './pages/my-orders/my-orders.component';
import { AdminProductsComponent } from './pages/admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './pages/admin/admin-orders/admin-orders.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { CommonModule } from '@angular/common';
import { MarkedPipe } from './marked.pipe';
import { SummaryPipe } from './summary.pipe';
import { ProductComponent } from './pages/product/product.component';
import { SlugifyPipe } from './slugify.pipe';



@NgModule({
  declarations: [
    AppComponent,
    MainNavigationComponent,
    HomeComponent,
    DrawingComponent,
    CanvasComponent,
    SurfacesComponent,
    PaintingComponent,
    BlogComponent,
    StoresComponent,
    ContactComponent,
    BlogPostComponent,
    NotFoundComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    MarkedPipe,
    SummaryPipe,
    ProductComponent,
    SlugifyPipe,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule,
    MatComponentsModule,
    BrowserAnimationsModule,
    NgReduxModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'painting/:product', component: ProductComponent},
      { path: 'painting', component: PaintingComponent},
      { path: 'drawing', component: DrawingComponent},
      { path: 'canvas', component: CanvasComponent},
      { path: 'surfaces', component: SurfacesComponent},
      // more specific routes go first
      { path: 'blog/:blogpost', component: BlogPostComponent},
      { path: 'blog', component: BlogComponent},
      { path: 'stores', component: StoresComponent},
      { path: 'contact', component: ContactComponent},
      { path: 'login', component: LoginComponent},
      { path: 'shopping-cart', component: ShoppingCartComponent},
      { path: 'my-orders', component: MyOrdersComponent},
      { path: 'checkout', component: CheckoutComponent},
      { path: 'admin/products', component: AdminProductsComponent},
      { path: 'admin/orders', component: AdminOrdersComponent},
      { path: '**', component: NotFoundComponent},

    ])
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {
    // pass root reducer and initial store as config
    const enhancers = isDevMode() ? [devTools.enhancer()] : []

    ngRedux.configureStore(rootReducer, INITIAL_STATE, [], enhancers)
  }

 }

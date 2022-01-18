import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CourseCardListModule } from './components/course-card-list/course-card-list.module';
import { CartWidgetComponent } from './components/cart-widget/cart-widget.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';
import { CartComponent } from './components/cart/cart.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { RouterModule } from '@angular/router';
import { WishlistComponent } from './components/wishlist/wishlist.component';
const routes = [
  { path: 'course/:id', component: CourseDetailsComponent },
  { path: 'courses', component: DashboardComponent },
  { path: 'cart', component: CartComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: '', redirectTo: '/courses', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    CartWidgetComponent,
    ModalComponent,
    CartComponent,
    CourseDetailsComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    CourseCardListModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

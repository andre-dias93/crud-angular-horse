import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from '@angular/material/list';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from "@angular/material/form-field";
import {SideNavComponent} from './layout/side-nav/side-nav.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {ProductListComponent} from './page/product/product-list.component';
import {ProductFormComponent} from './page/product/product-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    ProductListComponent,
    ProductFormComponent
  ],
  imports: [
    FormsModule,
    LayoutModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    BrowserModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatFormFieldModule,
    NoopAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

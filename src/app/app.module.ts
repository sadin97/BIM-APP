import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Dodao za input neki binding.
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

// home component
import { HomeComponent } from './components/home/home.component';
// shared component
import { SharedComponent } from './shared/shared.component';
// header component
import { HeaderComponent } from './shared/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { AboutModule } from './components/about/about.module';
import { ContactComponent } from './components/about/contact/contact.component';
import { SearchPipe } from './filters/search.pipe';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent }, // Path mozemo nazvati kako god zelimo.
  { path: 'about', component: AboutComponent }
]

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    SharedComponent,
    HeaderComponent,
    AboutComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    AboutModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

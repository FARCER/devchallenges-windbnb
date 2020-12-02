import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {SearchComponent} from './components/search/search.component';
import {PlacesModule} from './components/places/places.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    PlacesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

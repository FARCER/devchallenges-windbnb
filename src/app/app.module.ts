import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {SearchComponent} from './components/search/search.component';
import {PlacesModule} from './components/places/places.module';
import {HttpClientModule} from '@angular/common/http';
import { CounterComponent } from './components/search/counter/counter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    CounterComponent,
  ],
  imports: [
    BrowserModule,
    PlacesModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

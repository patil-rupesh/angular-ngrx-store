import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { StoreModule } from "@ngrx/store";
import { reducer } from "./reducers/tutorial.reducer";

import { AppComponent } from "./app.component";
import { ReadComponent } from "./read/read.component"; 
import { CreateComponent } from "./create/create.component"
@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      tutorial: reducer
    }),
    FormsModule
  ],
  declarations: [AppComponent, ReadComponent, CreateComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

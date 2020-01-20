import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { Tutorial } from "./../models/tutorial.models";
import { AppState } from "./../app.state";

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
})

export class ReadComponent implements OnInit {
  // Section 1
  tutorials: Observable<Tutorial[]>;

  // Section 2
  constructor(private store: Store<AppState>) {
    this.tutorials = store.select("tutorial");
  }

  ngOnInit() {}
}

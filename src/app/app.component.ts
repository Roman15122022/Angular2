import { Component } from '@angular/core';
import {HomeComponent} from "./home/home.component";
import {RouterModule} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.css'],
  imports:[
    HomeComponent,
    RouterModule,
  ]
})
export class AppComponent {
  title = 'homes';
}

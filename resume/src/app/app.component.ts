import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VerticalNavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, VerticalNavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'resume';
}

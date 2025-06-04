import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [RouterModule],
})
export class VerticalNavbarComponent {
  items = [
    {
      path: '',
      label: 'Accueil',
      icon: 'home',
    },
    {
      path: 'resume',
      label: 'Parcours',
      icon: 'home',
    },
    {
      path: 'projects',
      label: 'Projets',
      icon: 'projects',
    },
    {
      path: 'skills',
      label: 'Compétences',
      icon: 'home',
    },
    {
      path: 'contact',
      label: 'Contact',
      icon: 'home',
    },
  ];
}

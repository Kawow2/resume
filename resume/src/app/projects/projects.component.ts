import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  // Exemple dans projects.component.ts
  projects = [
    {
      title: 'Application de Gestion de Tâches',
      description:
        'Application Angular + Node.js pour organiser vos tâches au quotidien.',
      image: 'assets/images/projet1.jpg',
      //link: 'https://github.com/votre-utilisateur/projet1',
    },
    {
      title: 'Plateforme de Blog',
      description:
        'Blog moderne basé sur React et Express avec commentaires et likes.',
      image: 'assets/images/projet2.jpg',
      // link: 'https://github.com/votre-utilisateur/projet2',
    },
    {
      title: 'Site E-commerce',
      description: 'Boutique en ligne développée avec Vue.js et Django.',
      image: 'assets/images/projet3.jpg',
      // link: 'https://github.com/votre-utilisateur/projet3',
    },
    {
      title: 'Application de Chat',
      description:
        'Application de messagerie instantanée en Socket.io et Node.js.',
      image: 'assets/images/projet4.jpg',
      // link: 'https://github.com/votre-utilisateur/projet4',
    },
    {
      title: 'Dashboard RH',
      description:
        'Dashboard interactif pour la gestion d’intérimaires avec Angular & Tailwind.',
      image: 'assets/images/projet5.jpg',
      // link: 'https://github.com/votre-utilisateur/projet5',
    },
    {
      title: 'Appli Mobile Offline',
      description:
        'Prototype d’appli mobile responsive fonctionnant sans connexion.',
      image: 'assets/images/projet6.jpg',
      // link: 'https://github.com/votre-utilisateur/projet6',
    },
  ];
}

import { Component } from '@angular/core';
import { ProjectListComponent } from '../project-list/project-list.component';
import { url } from 'inspector';

@Component({
  selector: 'app-projects',
  imports: [ProjectListComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  professionnalProjects = [
    {
      title: `App mobile de demande d'intérimaire`,
      tag: 'PRO',
      description: `Application mobile angular permettant de faire des demandes d'intérimaires pour les chantiers, avec gestion notifications.`,
      technologies: ['MOA', 'MAQUETTES', 'GESTION DE PROJET'],
      url: 'https://www.pilott.fr/nos-solutions/pilott/nouveaute-application-mobile-pilott',
    },
    // {
    //   title: 'Analyse SIRENE',
    //   description: `Console app qui télécharge et indexe les données INSEE pour explorer les entreprises françaises.`,
    //   technologies: ['C#', 'API SIRENE', 'Open data'],
    // },
    // {
    //   title: 'Plateforme de demande mobile',
    //   description: `Prototype d'app mobile web PWA pour chefs de chantier, avec stockage offline et synchronisation.`,
    //   technologies: ['Angular', 'PWA', 'Mobile web'],
    // },
  ];

  schoolProjects = [
    // {
    //   title: 'Analyse SIRENE',
    //   description: `Console app qui télécharge et indexe les données INSEE pour explorer les entreprises françaises.`,
    //   technologies: ['C#', 'API SIRENE', 'Open data'],
    // },
    // {
    //   title: 'Plateforme de demande mobile',
    //   description: `Prototype d'app mobile web PWA pour chefs de chantier, avec stockage offline et synchronisation.`,
    //   technologies: ['Angular', 'PWA', 'Mobile web'],
    // },
    {
      title: 'YouStats',
      tag: 'WEB APP',
      description: `Application d'affichage des statistiques de vidéo YouTube, avec recherche et filtres`,
      technologies: ['python', 'PHP'],
      url: 'https://github.com/Kawow2/YouStats',
    },
  ];
}

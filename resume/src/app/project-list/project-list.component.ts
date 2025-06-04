import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';

@Component({
  selector: 'app-project-list',
  imports: [],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css',
})
export class ProjectListComponent {
  @Input() projects: any[] = [];
  @Input() title: string = '';

  goTo(url: string) {
    const win = window.open(url, '_blank');
    if (win) {
      win.focus();
    } else {
      console.error(
        'Failed to open the link. Please allow popups for this site.'
      );
    }
  }
}

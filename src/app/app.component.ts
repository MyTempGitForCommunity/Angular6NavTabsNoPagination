import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navLinks: { label: string, path: string }[] = [
    {label: 'Tab A', path: 'tab-a'},
    {label: 'Tab B', path: 'tab-b'},
    {label: 'Tab C', path: 'tab-c'},
    {label: 'Tab D', path: 'tab-d'},
    {label: 'Tab E', path: 'tab-e'},
    {label: 'Tab F', path: 'tab-f'},
    {label: 'Tab G', path: 'tab-g'},
    {label: 'Tab H', path: 'tab-h'},
    {label: 'Tab I', path: 'tab-i'},
    {label: 'Tab J', path: 'tab-j'},
  ];

}

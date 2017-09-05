import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1 (mouseover)="titleAlert($event)">{{title}}</h1>
        <car-parts></car-parts>`
})
export class AppComponent {
    title = 'Ultra Racing';
    titleAlert(event) {
        alert(event.clientX + " " + event.clientY);
    };
}
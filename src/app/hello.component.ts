import { Component } from '@angular/core';
import {NgIf} from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-hello',
    imports: [NgIf,NgFor],
    template: `
      <h2>Hello there!</h2>
      <h3>Your name: {{ user.name }}</h3>
      <p>Your age: {{ user.age }}</p>
      <div *ngIf="user.age >= 13">Bạn có thể xem nội dung PG-13</div>
      <div *ngIf="user.age < 13">Bạn không thể xem nội dung PG-13</div>
    <br>
    <div *ngFor="let author of authors; index as idx; count as total">
  ({{idx}})/({{total}}): {{author.id}} - {{author.firstName}}
  {{author.lastName}}
</div>  

    `,
  })

  export class HelloComponent {
    user = {
      name: 'James Bond',
      age: 30,
    };

    authors = [
        {
          id: 1,
          firstName: 'Flora',
          lastName: 'Twell',
          email: 'ftwell0@phoca.cz',
          gender: 'Female',
          ipAddress: '99.180.237.33',
        },
        {
          id: 2,
          firstName: 'Priscella',
          lastName: 'Signe',
          email: 'psigne1@berkeley.edu',
          gender: 'Female',
          ipAddress: '183.243.228.65',
        },
        // more data
      ];
  }
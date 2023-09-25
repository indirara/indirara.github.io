import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  constructor(private readonly httpClient: HttpClient) {}

  getInstaFeed(): void {
    const apiVersion = '11.0';
    const userId = 'indira.vtm';
  }
}

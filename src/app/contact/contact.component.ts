import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  reloadCheckVar = 'reloadCheck';

  ngOnInit(): void {
    if (!localStorage.getItem(this.reloadCheckVar)) {
      localStorage.setItem(this.reloadCheckVar, 'no reload');
      location.reload();
    } else {
      localStorage.removeItem(this.reloadCheckVar);
    }
  }
}

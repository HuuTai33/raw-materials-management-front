import { Component } from '@angular/core';
import {SessionService} from "../../../core/api/session/session.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private router: Router,
              private sessionService: SessionService) {
  }

  logout() {
    this.sessionService.logout().subscribe(result => {
      this.router.navigateByUrl('/home');
    })
  }

}

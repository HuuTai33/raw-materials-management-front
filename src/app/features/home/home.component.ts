import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SessionService} from "../../core/api/session/session.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  email: string = '';
  password: string = '';
  errorText: string = '';

  constructor(private router: Router,
              private sessionService: SessionService) {
  }

  ngOnInit(): void {
  }

  redirectRegister() {
    this.router.navigateByUrl('/register');
  }

  connect() {
    if (this.email != '' && this.password != '') {
      this.sessionService.login({email: this.email, password: this.password}).subscribe( result => {
        this.errorText = '';
        this.router.navigateByUrl('/rawmaterials');
      }, error => {
        this.errorText = error.error.message;
      })
    }
  }
}

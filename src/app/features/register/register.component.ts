import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../core/api/user/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email: string = '';
  password: string = '';
  errorText: string = '';

  constructor(private router: Router,
              private userService: UserService) {
  }

  ngOnInit(): void {
  }

  redirectConnect() {
    this.router.navigateByUrl('/home');
  }

  register() {
    if (this.email != '' && this.password != '') {
      this.userService.createUser({email: this.email, password: this.password}).subscribe( result => {
        this.errorText = '';
        this.router.navigateByUrl('/home');
      }, error => {
        if (error.status === 422) {
          this.errorText = 'Identifiants incorrects ou email déjà utilisé.'
        }
      })
    }
  }
}

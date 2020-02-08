import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from "angular2-flash-messages";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private flashMessages: FlashMessagesService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  logoutUser() {
    this.authService.logout();
    this.flashMessages.show('Logged out!', {
      cssClass: 'alert-warning',
      timeout: 2000
    });
    this.router.navigate(['/']);
    return false;
  }

}

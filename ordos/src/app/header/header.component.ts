import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private flashMessages: FlashMessagesService,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
  }

  logoutUser() {
    this.authService.logout();
    this.flashMessages.show('Exited from Account!', {cssClass: 'alert-warning', timeout: 3000} );
    this.router.navigate(['/']);
    return false;
  }

}

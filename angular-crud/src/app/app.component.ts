import {Component, OnInit} from '@angular/core';
import {NgxPermissionsService} from "ngx-permissions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-crud';
  constructor(private permissionsService: NgxPermissionsService){}

  ngOnInit(): void {
    const perm = ["ADMIN", "EDITOR"];

    // this.permissionsService.loadPermissions(perm);
  }

}

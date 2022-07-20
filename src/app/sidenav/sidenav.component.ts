import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  collapsed = true;

  toggleCollapse(): void{
    this.collapsed = !this.collapsed;
  }

  
}

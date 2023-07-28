import { Component, Input , OnInit} from '@angular/core';

@Component({
  selector: 'app-show-roles',
  templateUrl: './show-roles.component.html',
  styleUrls: ['./show-roles.component.scss']
})
export class ShowRolesComponent {
  @Input() role: any;

  showContent=false;
  

  

  toggleContent() {
    this.showContent = !this.showContent;
  }
}

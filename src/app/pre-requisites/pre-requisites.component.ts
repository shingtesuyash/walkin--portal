import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-pre-requisites',
  templateUrl: './pre-requisites.component.html',
  styleUrls: ['./pre-requisites.component.scss']
})
export class PreRequisitesComponent{

  showContent = false;
  @Input() userSelectedWalkin: any;

 

  

  toggleContent() {
    this.showContent = !this.showContent;
  }

}

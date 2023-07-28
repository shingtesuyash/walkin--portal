import { Component } from '@angular/core';
import { walkinData } from '../walkinData';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-view-walkins',
  templateUrl: './view-walkins.component.html',
  styleUrls: ['./view-walkins.component.scss']
})
export class ViewWalkinsComponent {
  url:string='../../assets/icons/zeus-logo.svg';
  walkins = walkinData.walkins;


  constructor(private router: Router) { }

  navigateToDetailPage(walkin: any) {
    // Navigate to the detail page with the selected card's data
    const queryParams = {
      walkinData: JSON.stringify(walkin)
    };
    this.router.navigate(['/walkinDetail'], { queryParams });
  }

}

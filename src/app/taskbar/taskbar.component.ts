import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.scss']
})
export class TaskbarComponent {
  @Input() active1:boolean;
  @Input() active2:boolean;
  @Input() active3:boolean;
}

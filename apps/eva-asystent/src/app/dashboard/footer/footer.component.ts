import { Component, OnInit } from '@angular/core';

import { faCoffee,
  faHeartbeat,
  faCommentAlt,
  faRunning,
  faAtom,
  faBookMedical,
  faTshirt,
  faCloudSunRain  } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'ev-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faCoffee = faCoffee;
  faHeartbeat = faHeartbeat;
  faCommentAlt = faCommentAlt;
  faRunning = faRunning;
  faAtom = faAtom;
  faBookMedical = faBookMedical;
  faTshirt = faTshirt;
  faCloudSunRain = faCloudSunRain;


  constructor() { }

  ngOnInit(): void {
  }

}

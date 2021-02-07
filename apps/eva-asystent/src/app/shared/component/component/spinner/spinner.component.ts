import { Component, OnInit, Input, SimpleChange, OnChanges } from '@angular/core';

@Component({
  selector: 'ev-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  @Input() loading:boolean = false;
  @Input() httploading:boolean = true;
  constructor() { }

  ngOnInit() {
    console.log('--------->>>');
  }


  ngOnChanges(changes:SimpleChange)
  {
    console.log(changes); //logging the changes in @Input()
  }

}

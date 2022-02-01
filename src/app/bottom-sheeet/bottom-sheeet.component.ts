import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bottom-sheeet',
  templateUrl: './bottom-sheeet.component.html',
  styleUrls: ['./bottom-sheeet.component.scss']
})
export class BottomSheeetComponent implements OnInit {
  @Input() open: any;
  @Output()  close = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  offClickHandler() {
    this.open=false;
    this.close.emit(this.open)
  }
}

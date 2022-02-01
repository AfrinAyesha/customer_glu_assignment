import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
// import { start } from 'repl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isOpen = false;
  timerValue:any;
  timerForm = new FormGroup({
    val: new FormControl(''),
  });
  status:any;
  isPlay:any;
  // Bottom sheet assignment
  open() {
    this.isOpen = true;
  }
  closing(event:any) {
    this.isOpen = event;
  }

  //  Timer assignment
  start() {
    this.timerValue = +this.timerForm.value.val;
    this.status = 'PLAY';
    this.isPlay =true;
  }
  reset() {
    console.log(this.timerForm)
    this.status = null;
    this.timerForm.reset();
    this.timerValue = 0;
  }
  pauseResume() {
    this.isPlay = !this.isPlay;
    if(this.isPlay) {
this.status = 'PLAY';
    }else {
      this.status = 'PAUSE';
    }
  }
}

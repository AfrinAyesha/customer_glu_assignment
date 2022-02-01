import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnChanges {
@Input() timeLimit:any = 0;
@Input() status:any;
inter:any;
  constructor() { }

  ngOnInit(): void {
   
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['status'].currentValue === 'PAUSE') {
      clearInterval(this.inter);
    } else if(this.timeLimit === 0){
      clearInterval(this.inter);
    }
    else{
      if(this.timeLimit!==null && this.timeLimit!==undefined ) {
        clearInterval(this.inter)
        this.inter=setInterval(()=>{
        this.timeLimit = this.timeLimit - 1;
    if (this.timeLimit === 0){
      clearInterval(this.inter);
    }
        } , 500);
            }
    }
     
  }

}

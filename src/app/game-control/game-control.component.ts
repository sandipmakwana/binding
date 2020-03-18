import { Component, OnInit , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameFiredevent = new EventEmitter<number>();
  interval;
  lastcounter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStartgame(){
    this.interval = setInterval(() => { this.gameFiredevent.emit(this.lastcounter+1); 
     // console.log(this.lastcounter);
      this.lastcounter++;
    }, 1000);
    
  }

  onPausegame(){
    clearInterval(this.interval);
  }
}

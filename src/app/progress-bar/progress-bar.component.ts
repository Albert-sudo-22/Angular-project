import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css',
  standalone: true
})

export class ProgressBarComponent implements OnInit, OnChanges {
  backgroundColor: string = '';

  @Input()
  set setBackground(value: string) {
    this.backgroundColor = value;
  }

  progressColor: string = '';
  @Input() 
  set setprogressColor(value: string){
    this.progressColor = value;
  }
  @Input() progress = 0;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('progress' in changes) {
      if (typeof changes['progress'].currentValue !== 'number') {
        const progress = Number(changes['progress'].currentValue);
        if (Number.isNaN(progress)) {
          this.progress = 0;
        } else {
          this.progress = progress;
        }
      }
    }
  }

  ngOnInit() {}
}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DodgingFallingThingComponent } from '../dialogs/dodging-falling-thing/dodging-falling-thing.component';
import { HF3Component } from '../dialogs/hf3/hf3.component';
import { MD3Component } from '../dialogs/md3/md3.component';
import { SplittingGameComponent } from '../dialogs/splitting-game/splitting-game.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openWorks(work: string) {
    let dialogRef;
    if (work === 'hf3') {
      dialogRef = this.dialog.open(HF3Component);
    } else if (work === 'md3') {
      dialogRef = this.dialog.open(MD3Component);
    } else if (work === 'splitting') {
      dialogRef = this.dialog.open(SplittingGameComponent);
    } else {
      dialogRef = this.dialog.open(DodgingFallingThingComponent);
    }
  }

}

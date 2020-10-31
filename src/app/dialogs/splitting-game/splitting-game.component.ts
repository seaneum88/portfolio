import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-splitting-game',
  templateUrl: './splitting-game.component.html',
  styleUrls: ['./splitting-game.component.scss']
})
export class SplittingGameComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<any>    ) { }

  ngOnInit(): void {
  }

  /**
   * close()
   */
  close(): void {
    this.dialogRef.close();
  }

}

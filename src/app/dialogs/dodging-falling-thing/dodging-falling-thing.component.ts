import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dodging-falling-thing',
  templateUrl: './dodging-falling-thing.component.html',
  styleUrls: ['./dodging-falling-thing.component.scss']
})
export class DodgingFallingThingComponent implements OnInit {

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

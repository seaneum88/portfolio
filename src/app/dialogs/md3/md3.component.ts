import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-md3',
  templateUrl: './md3.component.html',
  styleUrls: ['./md3.component.scss']
})
export class MD3Component implements OnInit {
  
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

import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-hf3',
  templateUrl: './hf3.component.html',
  styleUrls: ['./hf3.component.scss']
})
export class HF3Component implements OnInit {

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

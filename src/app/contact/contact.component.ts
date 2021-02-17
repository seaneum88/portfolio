import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { ListsDto } from '../lists/lists.dto';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  // lists
  lists: ListsDto[] = [];
  sendingFax = false;

  commentForm: FormGroup = this.fb.group({
    title: [''],
    content: ['']
  });

  constructor(private listService: ListService, private fb: FormBuilder) { }

  ngOnInit() {
    this.listService.getData().subscribe(lists => {
      this.lists = lists;
    });
  }

  /**
   * addComment
   *
   * send api request to backend to add new list
   */
  addComment() {
    const listToSave: ListsDto = { ...this.commentForm.getRawValue() };

    this.sendingFax = true;
    this.listService
      .addList(listToSave)
      .pipe(finalize(() => (this.sendingFax = false)))
      .subscribe(
        success => {
          if (success) {
            console.log('Great');
          }
        },
        err => {
          console.error(err);
        }
      );
  }
}

import { Observable } from 'rxjs';
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as chatActions from '../store/chat.actions';
import * as fromRoot from '../../reducers/index';
import { Player } from '../player.model';
import { FormControl, Validators } from '@angular/forms';
import { Message } from '../message.model';

@Component({
  selector: 'eg-grid-input',
  templateUrl: 'grid-input.html',
  styles: ['./grid.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridInputComponent implements OnInit {
  @Input() currentUser: Player;
  public chatForm: FormControl
  constructor(private store: Store<fromRoot.AppState>) {
  }

  ngOnInit() {
    this.chatForm = new FormControl('', [ Validators.minLength(1)]);
  }

  submit(){
    if(this.chatForm.valid){
      let msg = <Message>{id: this.currentUser.id, text: this.chatForm.value, isGif: false, parentMsgId: null }
      this.store.dispatch(new chatActions.SubmitMessage(msg));
    }
  }
}

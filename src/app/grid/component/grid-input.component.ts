import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers/index';
import { Message } from '../message.model';
import { Player } from '../player.model';
import * as chatActions from '../store/chat.actions';

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
      let msg = <Message>{id: this.currentUser.id, msg: this.chatForm.value, isGif: false, parentMsgId: null }
      if (/giphy/gi.test(this.chatForm.value)){
        msg.msg = msg.msg.replace(/\/giphy/g,'');
        this.store.dispatch(new chatActions.SubmitGif(msg));
      } else {
        this.store.dispatch(new chatActions.SubmitMessage(msg));
      }
    
    }
  }
}

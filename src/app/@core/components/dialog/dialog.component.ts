import { Component, OnInit, Inject, ChangeDetectionStrategy, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subject, Observable } from 'rxjs';

export interface IDialogActions {
  text: string;
  color?: 'primary' | 'accent' | 'warn'; // TODO use an enum for this
  state: DIALOG_STATES;
  icon?: string;
}

export interface IDialogOptions {
  title?: string;
  body?: string;
  actions?: IDialogActions[];
}

export enum DIALOG_STATES {
  AFFIRMATIVE,
  NEGATIVE
}

export const DEFAULT_DIALOG_WIDTH = '600px';

@Component({
  selector: 'rcp-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public options: IDialogOptions
  ) {}

  /**
   * TrackBy function for action buttons.
   */
  trackBtnByIndex(index: number, _: any): number {
    return index;
  }
}

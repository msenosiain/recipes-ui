import { Injectable, HostListener } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  DialogComponent,
  DIALOG_STATES,
  IDialogOptions,
  DEFAULT_DIALOG_WIDTH
} from '../components/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

export abstract class ACanDeactivate {
  matDialog: MatDialog;
  abstract dialogOptions: IDialogOptions;

  abstract canDeactivate(): boolean;

  constructor() {}

  confirmDeactivate(): Observable<boolean> {
    const dialogRef = this.matDialog.open(DialogComponent, {
      id: 'pending-changes-dialog',
      ariaLabel: 'pending-changes-dialog',
      width: DEFAULT_DIALOG_WIDTH,
      autoFocus: true,
      disableClose: false,
      restoreFocus: true,
      data: this.dialogOptions
    });

    return dialogRef.afterClosed().pipe(map<number, boolean>(state => state === DIALOG_STATES.AFFIRMATIVE));
  }

  @HostListener('window:beforeunload')
  canDeactivateFromBrowser(): boolean {
    return this.canDeactivate();
  }
}

@Injectable({
  providedIn: 'root'
})
export class PendingChangesGuard implements CanDeactivate<ACanDeactivate> {
  /**
   * Verify if component can be deactivated:
   * Component returns true on canDeactivate: YES
   * User confirms that want to leave on dialog: YES
   * User cancels: NO
   *
   */
  canDeactivate(component: ACanDeactivate): Observable<boolean> {
    return component.canDeactivate() ? of(true) : component.confirmDeactivate();
  }
}

import { Component, OnInit } from '@angular/core';
import { ACanDeactivate } from 'src/app/@core/guards/pending-changes.guard';
import { IDialogOptions } from 'src/app/@core/components/dialog/dialog.component';

@Component({
  selector: 'rcp-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.scss']
})
export class RecipeCreateComponent extends ACanDeactivate implements OnInit {
  dialogOptions: IDialogOptions;

  private canLeave = false;

  constructor() {
    super();
  }

  ngOnInit(): void {}

  canDeactivate(): boolean {
    return this.canLeave;
  }
}

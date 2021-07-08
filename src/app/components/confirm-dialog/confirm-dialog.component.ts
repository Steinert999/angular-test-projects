import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export enum DialogAction {
  DELETE = "deletar",
  UPDATE = "atualizar",
  CREATE = "criar"
}
export interface ConfirmDialogData {
  action: DialogAction,
  element: any
}
@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {

  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData) { }
  onNoClick(): void {
    this.dialogRef.close(false);
  }
  get message() {
    return `Você realmente deseja ${this.data.action} este dado?`;
  }
  confirm() {
    this.dialogRef.close(true);
  }
}


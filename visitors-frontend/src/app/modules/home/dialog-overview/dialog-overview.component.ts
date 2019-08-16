import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { dataModel } from "./dataModel";

@Component({
  selector: "app-dialog-overview",
  templateUrl: "./dialog-overview.component.html",
  styleUrls: ["./dialog-overview.component.css"]
})
export class DialogOverviewComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: dataModel
  ) {}

  ngOnInit() {}

  onNoClick(element): void {
    this.dialogRef.close({ data: element });
  }
}

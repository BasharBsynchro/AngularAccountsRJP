import { Component,input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-dialog-box',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatDialogModule, FormsModule],
  templateUrl: './trnsdialog-box.component.html',
  styleUrl: './trnsdialog-box.component.css'
})
export class TransactionDialogBoxComponent {

  constructor(private http: HttpClient) { }

  accountID: string = '';
  Customerlist: any[] = [];
  newAccounttoAdd: any =
    {
      "amount": 0
    }

  addNewTransaction() {
    
    this.http.post("https://localhost:7188/accounts/" + this.accountID+"/transactions", this.newAccounttoAdd).subscribe((res: any) => {
      if (res.id) {
        alert("Transaction has been added succesfully!")
      }
      else {
        alert("Transaction not added!")
      }

    })
  }

}

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
  templateUrl: './dialog-box.component.html',
  styleUrl: './dialog-box.component.css'
})
export class DialogBoxComponent {

  constructor(private http: HttpClient) { }

  Customerlist: any[] = [];
  
  newAccounttoAdd: any =
    {
      "customerID": "",
      "initialCredit": 0
    }

  

  addNewAccount() {
    
    
    this.http.get("https://localhost:7158/customers/" + this.newAccounttoAdd.customerID).subscribe((result: any) => {

      this.Customerlist[0] = result;
    });

    if (this.Customerlist[0].id == this.newAccounttoAdd.customerID) {

      this.http.post("https://localhost:7188/accounts", this.newAccounttoAdd).subscribe((res: any) => {
        if (res.accountid) {
          alert("Account has been created succesfully!")
        }
        else {
          alert("Error adding account!")
        }

      })
    }
    else {
      alert("Customer not found!")
    }
  }
  


}

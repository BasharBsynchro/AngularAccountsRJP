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
  templateUrl: './addcstrdialog-box.component.html',
  styleUrl: './addcstrdialog-box.component.css'
})
export class AddCustomerDialogBoxComponent {

  constructor(private http: HttpClient) { }
  
  newCustomertoAdd: any =
    {
      "name": "",
      "surname": ""
    }

  addNewCustomer() {
    
    this.http.post("https://localhost:7158/customers", this.newCustomertoAdd).subscribe((res: any) => {
      if (res.id) {
        alert("Customer has been added succesfully!")
      }
      else {
        alert("Customer not added!")
      }

    })
  }



}

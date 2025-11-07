import { Component,input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dialog-box',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatDialogModule, FormsModule],
  templateUrl: './searchdialog-box.component.html',
  styleUrl: './searchdialog-box.component.css'
})
export class SearchDialogBoxComponent {

  
  inputCustomer: string = '';
  Customerlist: any[] = [];

  

  constructor(private http: HttpClient) { }

  searchCustomer() {

    this.http.get("https://localhost:7158/customers/"+this.inputCustomer).subscribe((result: any) => {
      
      this.Customerlist[0] = result;
    });
  }
}

import { Component, signal, NgModule, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DialogBoxComponent } from './Dialog/dialog-box.component';
import { TransactionDialogBoxComponent } from './AddTransactionDialog/trnsdialog-box.component';
import { AddCustomerDialogBoxComponent } from './AddCustomerDialog/addcstrdialog-box.component';
import { SearchDialogBoxComponent } from './SearchCustomerDialog/searchdialog-box.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularAccountsRJP');

  //variables initialization
  accountID: string = '';
  accountList: any[] = [];
  transactionList: any[] = [];
  customerName: string = '';
  customerSurname: string = '';
  customerID: string = '';
  constructor(private http: HttpClient) { }

  //Open dialogs
  readonly dialog = inject(MatDialog);
  openDialog(): void {
    this.dialog.open(DialogBoxComponent)
  }
  openAddTransactionDialog(): void {
    this.dialog.open(TransactionDialogBoxComponent)
  }
  openAddCustomerDialog(): void {
    this.dialog.open(AddCustomerDialogBoxComponent)
  }
  openSearch(): void {
    this.dialog.open(SearchDialogBoxComponent)
  }
  
  //Show table toggle
  showTable: boolean = false;
  showCustomerTable: boolean = false;
  showAccountsTable: boolean = false;

  toggleTableVisibility(): void {
    this.showTable = !this.showTable;
  }

  toggleCustomerTableVisibility(): void {
    this.showCustomerTable = !this.showCustomerTable;
  }

  toggleAccountsTableVisibility(): void {
    this.showAccountsTable = !this.showAccountsTable;
  }

  //Get account information based on input accountID
  getAccount() {
    this.http.get("https://localhost:7188/accounts/" + this.accountID).subscribe((result: any) => {

      this.accountList[0] = result;
      this.transactionList = result.transactions;
      this.customerID = result.customerID;
    });

    this.http.get("https://localhost:7158/customers/" + this.customerID).subscribe((result: any) => {

      this.customerName = result.name;
      this.customerSurname = result.surname;
    });
    
  }

  public getJsonValue: any;
  public postJsonValue: any;

  inputCustomer: string = '';
 
  getCustomers() {
    this.http.get("https://localhost:7158/customers").subscribe((result: any) => {
      this.getJsonValue = result;
    });
  }
}

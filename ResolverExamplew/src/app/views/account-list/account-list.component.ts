import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { BankAccount } from 'src/app/models/BankAccount';
import { Observable } from 'rxjs';
import { on } from 'cluster';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})

export class AccountListComponent implements OnInit {
   BankAccounts: BankAccount[] = [];
  // BankAccounts: Observable<BankAccount[]>; // Con resolver
  constructor(private apiService: ApiService) { } // Con subscribe

  ngOnInit() {
     this.apiService.getBankAccounts().subscribe(
       dbAccounts => this.BankAccounts = dbAccounts, // value
       error => {   // Error
         alert('Hubo un error mire la consola');
         console.error(error);
       },
       () => {console.log('complete');  // Complete
      }
     ).unsubscribe();
    // this.BankAccounts = this.apiService.getBankAccounts();
  }

}

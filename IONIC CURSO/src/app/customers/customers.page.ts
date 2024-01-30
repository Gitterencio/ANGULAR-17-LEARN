import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonListHeader,
  IonAvatar,
  IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { searchSharp } from 'ionicons/icons';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonLabel,
    CommonModule,
    IonListHeader,
    IonAvatar,
    FormsModule,
    IonTitle,
    IonList,
    IonItem,
    IonHeader,
    IonToolbar,
    IonContent,
    IonMenuButton,
    IonButtons,
  ],
})
export class CustomersPage implements OnInit {
  users: any[] = [];
  access:boolean = true;
  private _http: HttpClient = inject(HttpClient);

  constructor() {
    addIcons({ searchSharp });
  }

  ngOnInit() {
    this.getUsers().subscribe({
      next: (res: any[]) => {
        
        this.users = res;
        console.log(this.users);
      },
      error: (err: any) => {
        console.error(err);
      },
    });
  }

  getUsers() {
    return this._http.get('assets/files/customers.json').pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }
}

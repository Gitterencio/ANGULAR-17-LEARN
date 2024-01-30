import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonRow, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.page.html',
  styleUrls: ['./cities.page.scss'],
  standalone: true,
  imports: [IonGrid,IonRow,IonCol,IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent,CommonModule, FormsModule,IonTitle,IonHeader,IonToolbar,IonContent,IonMenuButton,IonButtons]
})
export class CitiesPage implements OnInit {
cities:any[]=[];
private _http: HttpClient = inject(HttpClient);
  constructor() { }

  ngOnInit() {
    this.getCities().subscribe({
      next: (res: any[]) => {
        this.cities=res;
        console.log(this.cities);

      },
      error: (err: any) => {
        console.error(err);
      },
    });
  
  }

  getCities() {
    return this._http.get('assets/files/cities.json').pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }
}

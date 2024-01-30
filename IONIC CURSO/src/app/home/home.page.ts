import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonTitle, IonToolbar ,IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonGrid,IonRow,IonCol, CommonModule, FormsModule,IonTitle,IonHeader,IonToolbar,IonContent,IonMenuButton,IonButtons]
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

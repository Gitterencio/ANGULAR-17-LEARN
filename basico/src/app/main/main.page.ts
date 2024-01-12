import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {IonMenu, IonContent,IonToolbar,IonHeader,IonTitle,IonMenuButton,IonButtons,IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  imports: [IonButton,IonHeader,IonToolbar,IonMenuButton,IonButtons,IonMenu,IonTitle,IonContent, CommonModule, FormsModule]
})
export class MainPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

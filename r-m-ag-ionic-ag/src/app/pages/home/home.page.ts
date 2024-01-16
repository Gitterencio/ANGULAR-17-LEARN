import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonAvatar,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonList,
  IonRow,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonToolbar,
    IonHeader,
    IonTitle,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonAvatar,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonSearchbar,
    CommonModule,
    FormsModule,
    RouterLink
  ],
})
export class HomePage implements OnInit {
  private _randm: RickAndMortyService = inject(RickAndMortyService);
  public characters: any[] = [];
  params = {} as any;
  constructor() {}

  ngOnInit() {
    this.params.page = 0;
    this.getCharacters();
  }

  getCharacters(event?: any) {

    this.params.page += 1;

    this._randm.getCharacters(this.params).subscribe({
      next: (res: any) => {
        this.characters.push(...res.results);
        console.log(this.characters)
        if(event) event.target.complete();
      },
      error: (err: any) => {
        if(event) event.target.complete();
      },
    });
  }

  searchCharacters(event?: any) {
    this.params.page = 1;

    this._randm.getCharacters(this.params).subscribe({
      next: (res: any) => {
        this.characters=res.results;
      
      },
      error: (err: any) => {

      },
    });
  }
}

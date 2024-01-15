import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.page.html',
  styleUrls: ['./character-detail.page.scss'],
  standalone: true,
  imports: [IonHeader,IonToolbar,IonContent,IonButtons,IonBackButton, CommonModule, FormsModule],
})
export class CharacterDetailPage implements OnInit {
  private _actRoute: ActivatedRoute = inject(ActivatedRoute);
  private _randm: RickAndMortyService = inject(RickAndMortyService);
  private characterId: string = '';

  public character = null as any;

  constructor() {
    this.characterId = this._actRoute.snapshot.paramMap.get('id') as string;
    console.log(this.characterId);
  }

  ngOnInit() {}

  ionViewDidEnter() {
    this.getCharacter();
  }
  getCharacter() {
    this._randm.getCharacterById(this.characterId).subscribe({
      next: (res: any) => {
        console.log(res);
        this.character = res;
      },
      error: (err: any) => {},
    });
  }
}

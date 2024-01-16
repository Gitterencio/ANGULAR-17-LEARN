import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';
import {
  IonAvatar,
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonRow,
  IonToolbar,
  IonSpinner
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { locationOutline,videocamOutline,chevronDown } from 'ionicons/icons';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.page.html',
  styleUrls: ['./character-detail.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonContent,
    IonButtons,
    IonBackButton,
    CommonModule,
    FormsModule,
    IonAvatar,
    IonItem,
    IonLabel,
    IonIcon,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardContent,
    IonSpinner
  ],
})
export class CharacterDetailPage implements OnInit {
  private _actRoute: ActivatedRoute = inject(ActivatedRoute);
  private _randm: RickAndMortyService = inject(RickAndMortyService);
  private characterId: string = '';

  public character = null as any;
  public episodes:any[] = []

  constructor() {
    addIcons({ locationOutline,videocamOutline,chevronDown });

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
     
        this.character = res;
        this.getEpisodes();
      },
      error: (err: any) => {},
    });
  }

  getEpisodes() {

    for (let url of this.character.episode){
      this._randm.getByUrl(url).subscribe({
        next: (res: any) => {
          console.log(res);
          this.episodes.push(res)
  
        },
        error: (err: any) => {},
      });
    }
 
  }
}

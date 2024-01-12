import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel,IonToolbar,IonHeader,IonTitle, IonRouterOutlet,IonMenuButton,IonButtons,IonButton,IonBackButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp,backspace } from 'ionicons/icons';
import {IonicModule} from '@ionic/angular'
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls:['app.component.scss'],
  standalone: true,
  imports: [RouterLink,IonBackButton, RouterLinkActive, CommonModule, IonApp, IonSplitPane, IonMenu, IonContent, IonButton,IonList, IonListHeader,IonToolbar,IonTitle,IonHeader, IonNote, IonMenuToggle,IonButtons,IonMenuButton, IonItem, IonIcon, IonLabel, IonRouterOutlet],
  //imports:[IonicModule,RouterLink, RouterLinkActive]
})
export class AppComponent {
  public appPages = [
    { title: 'Main', url: '/main', icon: 'mail' },
    { title: 'Home', url: '/home', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  constructor() {
    addIcons({ mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp,backspace });
  }
}

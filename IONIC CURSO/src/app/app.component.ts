import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { homeSharp,peopleSharp,locationSharp,mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, IonApp, IonSplitPane,
     IonMenu, IonContent, IonList, IonListHeader, IonNote, 
     IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
  //  { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Customers', url: '/customers', icon: 'people' },
    { title: 'Cities', url: '/cities', icon: 'location' },
   // { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
   // { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
   // { title: 'Archived', url: '/folder/archived', icon: 'archive' },
   // { title: 'Trash', url: '/folder/trash', icon: 'trash' },
   // { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = []//['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {
   // addIcons({homeSharp,peopleSharp,mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });
   addIcons({homeSharp,peopleSharp,locationSharp})
  }
}

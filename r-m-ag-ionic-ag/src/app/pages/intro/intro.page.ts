import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule]
})
export class IntroPage implements OnInit {

  private _router:Router = inject(Router)
  
  constructor() { }

  ngOnInit() {

    setTimeout(()=>{
      this._router.navigate(['home'])
    },1500)
  }

}

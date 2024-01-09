import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { EdpointSimulationService } from '../../services/edpoint-simulation.service';

@Component({
  selector: 'app-asycn-component',
  standalone: true,
  imports: [AsyncPipe,JsonPipe],
  templateUrl: './asycn-component.html',
  styleUrl: './asycn-component.scss',
})
export class AsycnComponent {
  endPointSimulationService = inject(EdpointSimulationService);
  data$:Observable<any> = this.endPointSimulationService.hitEndpoint();

  constructor() {
   // afterNextRender(() => {
   //   console.log(window.location.pathname);
   // });
  }
}

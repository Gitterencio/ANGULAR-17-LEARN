import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EdpointSimulationService {

  http = inject(HttpClient);
  hitEndpoint(){

    return this.http.get('https://jsonplaceholder.typicode.com/todos/5')

  }
}

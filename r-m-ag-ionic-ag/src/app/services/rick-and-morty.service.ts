import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyService {
  private _http: HttpClient = inject(HttpClient);
  constructor() {}

  getCharacters(params: any) {
    
    return this._http.get(environment.baseApi + environment.character, {
      params,
    });
  }

  getCharacterById(id:string) {
    
    return this._http.get(environment.baseApi + environment.character+`/${id}`);
  }

  getByUrl(url:string){
    return this._http.get(url);
  }
}

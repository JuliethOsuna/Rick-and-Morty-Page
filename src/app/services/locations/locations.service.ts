import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  private url = environment.apiUrl;
  private endPoint = `${this.url}location/`;

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(this.endPoint);
  }

  getSingle(id){
    return this.http.get(`${this.endPoint}${id}`)
  }

  getMultiple(id){//como se debe enviar parametro?
    return this.http.get(`${this.endPoint}${id}`)
  }

  filter(request){
    return this.http.get(`${this.endPoint}?${request}`)
  }

}

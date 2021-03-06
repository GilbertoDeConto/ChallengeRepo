import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'https://restcountries.eu/rest/v2/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {}

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getCountries(): Observable<any> {
    return this.http.get(endpoint + 'all/')
  }

  getCountry(name): Observable<any> {
    return this.http.get(endpoint + 'name/' + name).pipe(
      map(this.extractData));
  }
  
  getBorder(alpha): Observable<any> {
    return this.http.get(endpoint + 'alpha/' + alpha).pipe(
      map(this.extractData));
  }

  getRegion(region): Observable<any> {
    return this.http.get(endpoint + 'region/' + region).pipe(
      map(this.extractData));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
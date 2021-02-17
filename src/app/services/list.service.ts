import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { ListsDto } from '../lists/lists.dto';


@Injectable({ providedIn: 'root' })
export class ListService {
  private listsUrl = 'https://portfolio-api-express.herokuapp.com/api/lists';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  /** GET ists from the server */
  getData(): Observable<ListsDto[]> {
    const url = this.listsUrl;
    return this.http.get<ListsDto[]>(url)
        .pipe(
        catchError(this.handleError<ListsDto[]>('getLists', []))
      );
  }

  /** POST: add a new list to the server */
  addList(listsDto: ListsDto): Observable<ListsDto> {
    return this.http.post<ListsDto>(this.listsUrl, listsDto, this.httpOptions).pipe(
      tap((newListsDto: ListsDto) => console.log(`added new list with id=${newListsDto.id}`)),
      catchError(this.handleError<ListsDto>('addList'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

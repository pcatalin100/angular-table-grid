import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  private headerContent = 'api/data/table-header.json';
  private tableContent = 'api/data/table-content.json';
  constructor(private http: HttpClient) { }

  getHeaderContent(): Observable<any> {
    return this.http.get(this.headerContent).pipe(
      //tap(data => console.log("Data: " + JSON.stringify(data))),
      catchError(this.handleError)
    )
  }
  getTableContent(): Observable<any> {
    return this.http.get(this.tableContent).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);

  }
}

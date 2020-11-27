import { Injectable } from '@angular/core';
import { Status } from '../pots/pot-detail/statuses/status.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private httpClient: HttpClient) {
  }
  //todo extract cloud url into env variable
  getLatestStatus(): Observable<Status> {
    return this.httpClient.get('http://localhost:8080/pot/status/latest')
      .pipe(map((res: Status) => {
        return res;
      }));
  }

  getStatuses(): Observable<Status[]> {
    return this.httpClient.get('http://localhost:8080/pot/statuses')
      .pipe(map((res: Status[]) => {
        return res;
      }));
  }

  collectStatus(): Observable<Status> {
    return this.httpClient.get('http://localhost:8080/pot/status/collect')
      .pipe(map((res: Status) => {
        return res;
      }));
  }

  changeConfig(cfg: string, value: boolean | string): Observable<any> {
    return this.httpClient.get(`http://localhost:8080/pot/config?${cfg}=${value}`)
      .pipe(map((res: any) => {
        return res;
      }));

  }
}

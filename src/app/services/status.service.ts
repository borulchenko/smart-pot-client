import { Injectable } from '@angular/core';
import { Status } from '../pots/pot-detail/statuses/status.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  readonly cloudApiUrl = environment.cloudApiUrl;

  constructor(private httpClient: HttpClient) {
  }

  getLatestStatus(): Observable<Status> {
    return this.httpClient.get(`${this.cloudApiUrl}pot/status/latest`)
      .pipe(map((res: Status) => {
        return res;
      }));
  }

  getStatuses(): Observable<Status[]> {
    return this.httpClient.get(`${this.cloudApiUrl}pot/statuses`)
      .pipe(map((res: Status[]) => {
        return res;
      }));
  }

  collectStatus(): Observable<Status> {
    return this.httpClient.get(`${this.cloudApiUrl}pot/status/collect`)
      .pipe(map((res: Status) => {
        return res;
      }));
  }

  changeConfig(cfg: string, value: boolean | string): Observable<any> {
    return this.httpClient.get(`${this.cloudApiUrl}pot/config?${cfg}=${value}`)
      .pipe(map((res: any) => {
        return res;
      }));

  }
}

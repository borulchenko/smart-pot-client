import { Component, OnDestroy, OnInit } from '@angular/core';
import { StatusService } from '../../services/status.service';
import { Status } from './statuses/status.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-pot-detail',
  templateUrl: './pot-detail.component.html',
  styleUrls: ['./pot-detail.component.scss']
})
export class PotDetailComponent implements OnInit, OnDestroy {
  private statuses: Status[];
  private destroy$ = new Subject<void>();

  constructor(private statusService: StatusService) { }

  ngOnInit() {
    this.statusService.getStatuses()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: Status[]) => {
        this.statuses = data;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}

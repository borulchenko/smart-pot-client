import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChartService } from '../../../../services/chart.service';
import { Status } from '../status.model';
import { StatusService } from '../../../../services/status.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-status-history',
  templateUrl: './status-history.component.html',
  styleUrls: ['./status-history.component.scss']
})
export class StatusHistoryComponent implements OnInit, OnDestroy {
  private statuses: Status[];
  private destroy$ = new Subject<void>();

  constructor(private statusService: StatusService,
              private chartService: ChartService) {
  }

  ngOnInit() {
    this.statusService.getStatuses()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: Status[]) => {
        this.statuses = data;
        this.chartService.createCharts(this.statuses);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  refreshStatuses(): void {
    this.statusService.getStatuses()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: Status[]) => {
        this.statuses = data;
        this.chartService.createCharts(this.statuses);
      });
  }
}


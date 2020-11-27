import { Component, OnDestroy, OnInit } from '@angular/core';
import { StatusService } from '../../../../services/status.service';
import { Status } from '../status.model';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-status-latest',
  templateUrl: './status-latest.component.html',
  styleUrls: ['./status-latest.component.scss']
})
export class StatusLatestComponent implements OnInit, OnDestroy {
  private status: Status;
  private destroy$ = new Subject<void>();
  private color: ThemePalette;

  constructor(private statusService: StatusService) {
  }

  ngOnInit() {
    this.color = 'primary';
    this.fetchLatestStatus();
  }

  toggle(): void {
    this.status.illuminationEnabled = !this.status.illuminationEnabled;
    this.statusService.changeConfig('illuminationEnabled', this.status.illuminationEnabled)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  refreshStatus() {
    this.statusService.collectStatus()
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
      });

    setTimeout(() => {
      this.fetchLatestStatus();
    }, 1000);
  }

  private fetchLatestStatus() {
    this.statusService.getLatestStatus()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: Status) => {
        this.status = data;
      });
  }
}

export class ChartConfig {
  public chartName: string;
  public backgroundColor: string;
  public borderColor: string;
  public tooltipSuffix: string;
  public tickSuffix: string;
  public tooltipCallback: any;
  public tickCallback: any;
  public data: ChartConfigData[];

  constructor(
    chartName: string,
    backgroundColor: string,
    borderColor: string,
    tooltipSuffix: string,
    tickSuffix: string,
    tooltipCallback: any,
    tickCallback: any,
    data: ChartConfigData[]) {
    this.chartName = chartName;
    this.backgroundColor = backgroundColor;
    this.borderColor = borderColor;
    this.tooltipSuffix = tooltipSuffix;
    this.tickSuffix = tickSuffix;
    this.tooltipCallback = tooltipCallback;
    this.tickCallback = tickCallback;
    this.data = data;
  }
}

export interface ChartConfigData {
  x: string;
  y: number | boolean;
}

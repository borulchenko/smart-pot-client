import { Injectable } from '@angular/core';
import { Status } from '../pots/pot-detail/statuses/status.model';
import { Chart } from 'node_modules/chart.js';
import { ChartConfig, ChartConfigData } from '../shared/model/chart.config.model';
import { appConstants } from '../app.constants';

@Injectable()
export class ChartService {

  constructor() {
  }

  createCharts(statuses: Status[]) {
    return {
      airTemperatureChart: this.createAirTemperatureChart(statuses),
      airHumidityChartL: this.getAirHumidityConfig(statuses),
      soilHumidityChart: this.getSoilHumidityConfig(statuses),
      illuminationChart: this.getIlluminationConfig(statuses)
    };
  }

  private createAirTemperatureChart(statuses: Status[]) {
    const chartConfig = new ChartConfig(
      appConstants.CHARTS.AIR_TEMPERATURE.NAME,
      appConstants.CHARTS.AIR_TEMPERATURE.BACKGROUND_COLOR,
      appConstants.CHARTS.AIR_TEMPERATURE.BORDER_COLOR,
      appConstants.CHARTS.AIR_TEMPERATURE.TOOLTIP_SUFFIX,
      appConstants.CHARTS.AIR_TEMPERATURE.TICK_SUFFIX,
      this.numberTooltipCallback(appConstants.CHARTS.AIR_TEMPERATURE.TOOLTIP_SUFFIX),
      this.numberTickCallback(appConstants.CHARTS.AIR_TEMPERATURE.TICK_SUFFIX),
      this.toDataBy(statuses, 'airTemperature'));

    return new Chart('air-temperature', this.createChartConfig(chartConfig));
  }

  private getAirHumidityConfig(statuses: Status[]) {
    const chartConfig = new ChartConfig(
      appConstants.CHARTS.AIR_HUMIDITY.NAME,
      appConstants.CHARTS.AIR_HUMIDITY.BACKGROUND_COLOR,
      appConstants.CHARTS.AIR_HUMIDITY.BORDER_COLOR,
      appConstants.CHARTS.AIR_HUMIDITY.TOOLTIP_SUFFIX,
      appConstants.CHARTS.AIR_HUMIDITY.TICK_SUFFIX,
      this.numberTooltipCallback(appConstants.CHARTS.AIR_HUMIDITY.TOOLTIP_SUFFIX),
      this.numberTickCallback(appConstants.CHARTS.AIR_HUMIDITY.TICK_SUFFIX),
      this.toDataBy(statuses, 'airHumidity'));

    return new Chart('air-humidity', this.createChartConfig(chartConfig));
  }

  private getSoilHumidityConfig(statuses: Status[]) {
    const chartConfig = new ChartConfig(
      appConstants.CHARTS.SOIL_HUMIDITY.NAME,
      appConstants.CHARTS.SOIL_HUMIDITY.BACKGROUND_COLOR,
      appConstants.CHARTS.SOIL_HUMIDITY.BORDER_COLOR,
      appConstants.CHARTS.SOIL_HUMIDITY.TOOLTIP_SUFFIX,
      appConstants.CHARTS.SOIL_HUMIDITY.TICK_SUFFIX,
      this.numberTooltipCallback(appConstants.CHARTS.SOIL_HUMIDITY.TOOLTIP_SUFFIX),
      this.numberTickCallback(appConstants.CHARTS.SOIL_HUMIDITY.TICK_SUFFIX),
      this.toDataBy(statuses, 'soilHumidity'));

    return new Chart('soil-humidity', this.createChartConfig(chartConfig));
  }

  private getIlluminationConfig(statuses: Status[]) {

    const tickCallback = (value) => {
      return value === 1
        ? 'ON' : value === 0 ? 'OFF' : '';
    };

    const tooltipCallback = (tooltipItem, data) => {
      const label = data.datasets[tooltipItem.datasetIndex].label;

      if (!label) {
        return '---';
      }
      const tooltipValue = Number(tooltipItem.value);

      const suffix = tooltipValue === 1
        ? 'ON' : tooltipValue === 0
          ? 'OFF' : '';

      return label.concat(' is ', suffix);
    };

    const chartConfig = new ChartConfig(
      appConstants.CHARTS.ILLUMINATION.NAME,
      appConstants.CHARTS.ILLUMINATION.BACKGROUND_COLOR,
      appConstants.CHARTS.ILLUMINATION.BORDER_COLOR,
      '', '', tooltipCallback, tickCallback,
      this.toDataBy(statuses, 'illuminationEnabled'));

    return new Chart('illuminationEnabled', this.createChartConfig(chartConfig));
  }

  private createChartConfig(chartConfig: ChartConfig) {
    return {
      type: 'line',
      data: {
        datasets: [{
          label: chartConfig.chartName,
          backgroundColor: chartConfig.backgroundColor,
          borderColor: chartConfig.borderColor,
          borderWidth: 2,
          data: chartConfig.data,
        }]
      },
      options: {
        scales: {
          yAxes: [{
            display: true,
            ticks: {
              callback: chartConfig.tickCallback
            }
          }],
          xAxes: [{
            type: 'time',
            display: true,
          }]
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 20,
            bottom: 0
          }
        },
        tooltips: {
          callbacks: {
            title: (tooltipItem) => {
              const xLabel = tooltipItem[0].xLabel;
              return xLabel ? xLabel.replace('T', ' ') : xLabel;
            },
            label: chartConfig.tooltipCallback
          }
        }
      }
    };
  }

  private numberTooltipCallback(suffix: string) {
    const tooltipCallback = (tooltipItem, data) => {
      const label = data.datasets[tooltipItem.datasetIndex].label;
      return label ? label.concat(suffix) : '---';
    };

    return tooltipCallback;
  }

  private numberTickCallback(suffix: string) {
    const tickCallback = (value) => {
      return `${value}${suffix}`;
    };
    return tickCallback;
  }

  private toDataBy(statuses: Status[], field: string): ChartConfigData[] {
    return statuses.map(status => {
      return {x: status.collectionTime, y: status[field]};
    });
  }
}

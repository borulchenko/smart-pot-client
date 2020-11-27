export class Status {
  public airTemperature: number;
  public airHumidity: number;
  public soilHumidity: number;
  public illuminationEnabled: boolean;
  public collectionTime: string;

  constructor(
    airTemperature: number,
    airHumidity: number,
    soilHumidity: number,
    illuminationEnabled: boolean,
    collectionTime: string) {
    this.airTemperature = airTemperature;
    this.airHumidity = airHumidity;
    this.soilHumidity = soilHumidity;
    this.illuminationEnabled = illuminationEnabled;
    this.collectionTime = collectionTime;
  }
}

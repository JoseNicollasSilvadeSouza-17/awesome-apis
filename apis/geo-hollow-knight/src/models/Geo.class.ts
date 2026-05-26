export default class Geo {
  private static USD_TO_BRL: number = 5.3;
  private static GEO_TO_USD: number = 1.99 / 90;
  private static GEO_TO_BRL: number = this.GEO_TO_USD * this.USD_TO_BRL;

  static format(value: number) {
    return Number(value.toFixed(2));
  }

  static converterGeoToOther(amount: number) {
    return {
      GEO: amount,
      CONVERTER_TO_USD: this.format(amount * this.GEO_TO_USD),
      CONVERTER_TO_BRL: this.format(amount * this.GEO_TO_BRL),
    };
  }

  static converterBrlToGeo(value: number) {
    return {
      BRL: value,
      CONVERTER_TO_GEO: this.format(value / this.GEO_TO_BRL),
    };
  }

  static converterUsdToGeo(value: number) {
    return {
      USD: value,
      CONVERTER_TO_USD: this.format(value / this.GEO_TO_USD),
    };
  }
}

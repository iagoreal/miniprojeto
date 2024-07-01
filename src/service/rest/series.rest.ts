import api from "../rxjs";

export class SeriesRest {
  getPopularSeries() {
    return api.get("/tv/popular");
  }

}

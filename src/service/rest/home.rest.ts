import api from "../rxjs";

export class HomeRest {
  getAllPopular() {
    return api.get("/trending/all/day");
  }
}

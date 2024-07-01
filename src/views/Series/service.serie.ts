import { SeriesRest } from "@/service/rest/series.rest";
import { BehaviorSubject, Observable } from "rxjs";

export class SeriesService {
  constructor(private _serieRest = new SeriesRest()) {}
  private allPopular$: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  allPopular: Observable<any> = this.allPopular$.asObservable();

  getPopularSeries(): void {
    this._serieRest
      .getPopularSeries()
      .pipe()
      .subscribe({
        next: (response: any) => {
          this.allPopular$.next(response);
        },
      });
  }
}
import { HomeRest } from "@/service/rest/home.rest";
import { BehaviorSubject, Observable } from "rxjs";

export class HomeService {
  constructor(private _homeRest = new HomeRest()) {}
  private allPopular$: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  allPopular: Observable<any> = this.allPopular$.asObservable();

  getAllHomePopular(): void {
    this._homeRest
      .getAllPopular()
      .pipe()
      .subscribe({
        next: (response: any) => {
          this.allPopular$.next(response);
        },
      });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) {}
  getContries() {
    return (
      this.http
        .get('https://restcountries.eu/rest/v2/lang/en')
        //the pipe work with the map like a filer, when is inside, the filter is expand with antoher map
        // .pipe(
        //   map((res: any[]) => {
        //     return res.map((country) => {
        //       return {
        //         name: country.name,
        //         code: country.alpha3Code,
        //       };
        //     });
        //   })
        // )
        .pipe(
          map((res: any[]) =>
            res.map((country) => ({
              name: country.name,
              code: country.alpha3Code,
            }))
          )
        )
    );
  }
}

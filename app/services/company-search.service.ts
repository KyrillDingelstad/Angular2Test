import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Company }           from '../company/company';
@Injectable()
export class CompanySearchService {
  constructor(private http: Http) {}
  search(term: string): Observable<Company[]> {
    return this.http
               .get(`app/companies/?name=${term}`)
               .map((r: Response) => r.json().data as Company[]);
  }
}

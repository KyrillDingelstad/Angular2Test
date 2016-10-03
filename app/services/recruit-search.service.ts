import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Recruit }           from '../recruit/recruit';
@Injectable()
export class RecruitSearchService {
  constructor(private http: Http) {}
  search(term: string): Observable<Recruit[]> {
    return this.http
               .get(`app/recruits/?name=${term}`)
               .map((r: Response) => r.json().data as Recruit[]);
  }
}

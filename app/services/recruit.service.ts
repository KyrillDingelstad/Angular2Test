import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Recruit } from '../recruit/recruit';


@Injectable()
export class RecruitService {
    private recruitsUrl = 'app/recruits'; 

  constructor(private http: Http) { }

  getRecruits(): Promise<Recruit[]> {
    return this.http.get(this.recruitsUrl)
               .toPromise()
               .then(response => response.json().data as Recruit[])
               .catch(this.handleError);
  }

  getRecruit(id: number): Promise<Recruit> {
    return this.getRecruits()
               .then(recruits => recruits.find(recruit => recruit.id === id));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }

  private headers = new Headers({'Content-Type': 'application/json'});

  update(recruit: Recruit): Promise<Recruit> {
    const url = `${this.recruitsUrl}/${recruit.id}`;
    return this.http
      .put(url, JSON.stringify(recruit), {headers: this.headers})
      .toPromise()
      .then(() => recruit)
      .catch(this.handleError);
  }

  create(name: string): Promise<Recruit> {
    return this.http
      .post(this.recruitsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }
  delete(id: number): Promise<void> {
  const url = `${this.recruitsUrl}/${id}`;
  return this.http.delete(url, {headers: this.headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError);
  }
}

import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Company } from '../company/company';


@Injectable()
export class CompanyService {
    private companiesUrl = 'app/companies'; 

  constructor(private http: Http) { }

  getCompanies(): Promise<Company[]> {
    return this.http.get(this.companiesUrl)
               .toPromise()
               .then(response => response.json().data as Company[])
               .catch(this.handleError);
  }

  getCompany(id: number): Promise<Company> {
    return this.getCompanies()
               .then(companies => companies.find(company => company.id === id));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }

  private headers = new Headers({'Content-Type': 'application/json'});

  update(company: Company): Promise<Company> {
    const url = `${this.companiesUrl}/${company.id}`;
    return this.http
      .put(url, JSON.stringify(company), {headers: this.headers})
      .toPromise()
      .then(() => company)
      .catch(this.handleError);
  }

  create(name: string): Promise<Company> {
    return this.http
      .post(this.companiesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }
  delete(id: number): Promise<void> {
  const url = `${this.companiesUrl}/${id}`;
  return this.http.delete(url, {headers: this.headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError);
  }
}

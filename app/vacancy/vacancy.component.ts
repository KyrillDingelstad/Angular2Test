import { Component, Input, OnInit, OnChanges, SimpleChange} from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { CompanyService } from '../services/company.service';
import { Company }        from '../company/company';
import { Vacancy }        from './vacancy';

@Component({
  selector: 'vacancies',
  templateUrl: 'app/vacancy/vacancy.component.html',
  styleUrls: ['app/vacancy/vacancy.component.css'],
  providers: [CompanyService]
})
export class VacancyComponent implements OnInit {

  @Input()
  company: Company;

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
   this.getVacancies()
  }

  vacancies: Vacancy[];

  constructor(
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  getVacancies(): void {
    this.companyService.getCompanyVacancies(this.company.name).then(vacancies => this.vacancies = vacancies);
  }
  
  ngOnInit(): void {
  if(this.company) return;
  this.route.params.forEach((params: Params) => {
    let id = +params['id'];
    this.companyService.getCompany(id)
      .then(company => this.company = company);
  });
 }

 onSelect() {
   console.log('selecting vacancy');
   //TODO add tags that can link to tags in the recruit class to link recruits to a job
 }

 goBack(): void {
  this.location.back();
 }

 save(): void {
    this.companyService.update(this.company)
    .then(() => this.goBack());
  }  
}

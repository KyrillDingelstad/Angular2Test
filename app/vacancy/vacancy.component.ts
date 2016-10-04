import { Component, Input, OnInit, OnChanges, SimpleChange} from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { CompanyService } from '../services/company.service';
import { Company }        from '../company/company';
import { Vacancy }        from './vacancy';
import { RecruitService } from '../services/recruit.service';
import { Recruit }        from '../recruit/recruit';

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

  recruits: Recruit[];
  vacancies: Vacancy[];
  possibleRecruits: Recruit[];

  constructor(
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private location: Location,
    private recruitService: RecruitService
  ) {}

  getVacancies(): void {
    this.companyService.getCompanyVacancies(this.company.name).then(vacancies => this.vacancies = vacancies);
  }
  
  ngOnInit(): void {
  if(!this.recruits) {
    this.recruitService.getRecruits().then(recruits => this.recruits = recruits);
  }

  if(!this.company) {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.companyService.getCompany(id)
        .then(company => this.company = company);
    });
    }
 }
 intersect(a, b) {
    var t;
    if (b.length > a.length) t = b, b = a, a = t;
    return a.filter(function (e) {
        if (b.indexOf(e) !== -1) return true;
    });
 }

 onSelect(vacancy: Vacancy) {
   this.possibleRecruits = [];
   if(!vacancy.tags) return;
   for (var i = 0; i < this.recruits.length; i++) {
     var recruit = this.recruits[i];
     if(this.intersect(vacancy.tags, recruit.tags).length) {
       this.possibleRecruits.push(recruit);
     };
   }
   console.log(this.possibleRecruits);
 }

 goBack(): void {
  this.location.back();
 }

 save(): void {
    this.companyService.update(this.company)
    .then(() => this.goBack());
  }  
}

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { CompanyService } from '../services/company.service';
import { Company }        from '../company/company';

@Component({
  selector: 'company-details',
  templateUrl: 'app/company-details/company-details.component.html',
  styleUrls: ['app/company-details/company-details.component.css'],
})
export class CompanyDetailsComponent implements OnInit {

  @Input()
  company: Company;

  constructor(
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {

  if(this.company) return;
  this.route.params.forEach((params: Params) => {
    let id = +params['id'];
    this.companyService.getCompany(id)
      .then(company => this.company = company);
  });
 }
 goBack(): void {
  this.location.back();
 }

 save(): void {
    this.companyService.update(this.company)
    .then(() => this.goBack());
  }  
}

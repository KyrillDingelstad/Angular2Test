import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from './company';
import { CompanyService } from '../services/company.service';


@Component({
  selector: 'companies',
  templateUrl: 'app/company/company.component.html',
  styleUrls: ['app/company/company.component.css'],
  providers: [CompanyService]
})

export class CompanyComponent implements OnInit{
  companies: Company[];
  selectedCompany: Company;
  addText = 'Add a company';
  constructor(
    private router: Router,
    private companyService: CompanyService) { }
  getCompanies(): void {
    this.companyService.getCompanies().then(companies => this.companies = companies);
  }
  ngOnInit(): void {
    this.getCompanies();
  }
  onSelect(company: Company): void {
    this.selectedCompany= company;
  }
  gotoDetail(): void {
    this.router.navigate(['company/details', this.selectedCompany.id]);
  }
  onInputClicked(){
    if(this.addText === 'Add a company') this.addText = '';
  }

  onBlur() {
    if(this.addText.length === 0 ) this.addText = 'Add a company';
    this.addText = this.addText;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.companyService.create(name)
      .then(company => {
        this.companies.push(company);
        this.selectedCompany = null;
      });
  }

  delete(company: Company): void {
  this.companyService
      .delete(company.id)
      .then(() => {
        this.companies = this.companies.filter(h => h !== company);
        if (this.selectedCompany === company) { this.selectedCompany = null; }
      });
  }

}

import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { CompanySearchService } from '../services/company-search.service';
import { Company } from '../company/company';
@Component({
  selector: 'company-search',
  templateUrl: 'app/company-search/company-search.component.html',
  styleUrls: [ 'app/company-search/company-search.component.css' ],
  providers: [CompanySearchService]
})
export class CompanySearchComponent implements OnInit {
  searchDefault = 'Search';
  companies: Observable<Company[]>;
  private searchTerms = new Subject<string>();
  constructor(
    private companySearchService: CompanySearchService,
    private router: Router) {}
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.companies = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.companySearchService.search(term)
        // or the observable of empty heroes if no search term
        : Observable.of<Company[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Company[]>([]);
      });
  }

  searchClicked(){
    this.searchDefault = '';
  }

  onBlur(){
    if(this.searchDefault.length === 0 ) this.searchDefault = 'Search';
    this.searchDefault = this.searchDefault;
  }
  gotoDetail(company: Company): void {
    let link = ['/company/details', company.id];
    this.router.navigate(link);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { RecruitSearchService } from '../services/recruit-search.service';
import { Recruit } from '../recruit/recruit';
@Component({
  selector: 'recruit-search',
  templateUrl: 'app/recruit-search/recruit-search.component.html',
  styleUrls: [ 'app/recruit-search/recruit-search.component.css' ],
  providers: [RecruitSearchService]
})
export class RecruitSearchComponent implements OnInit {
  recruits: Observable<Recruit[]>;
  private searchTerms = new Subject<string>();
  constructor(
    private recruitSearchService: RecruitSearchService,
    private router: Router) {}
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.recruits = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.recruitSearchService.search(term)
        // or the observable of empty heroes if no search term
        : Observable.of<Recruit[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Recruit[]>([]);
      });
  }
  gotoDetail(recruit: Recruit): void {
    let link = ['/recruit/details', recruit.id];
    this.router.navigate(link);
  }
}
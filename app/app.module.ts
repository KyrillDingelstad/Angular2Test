import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';


// Imports for loading & configuring the in-memory web api(faking a database)
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

import './rxjs-extensions';
import { routing }                 from './app.routing';
import { AppComponent }            from './app.component';
import { RecruitsComponent }       from './recruit/recruit.component';
import { RecruitService }          from './services/recruit.service';
import { RecruitDetailsComponent } from './recruit-details/recruit-details.component';
import { RecruitSearchComponent }  from './recruit-search/recruit-search.component';
import { CompanyComponent }        from './company/company.component';
import { CompanyService }          from './services/company.service';
import { VacancyComponent } from './vacancy/vacancy.component';
import { CompanySearchComponent }  from './company-search/company-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    routing
  ],
  declarations: [
    AppComponent,
    RecruitsComponent,
    RecruitDetailsComponent,
    RecruitSearchComponent,
    CompanyComponent,
    VacancyComponent,
    CompanySearchComponent
  ],
  providers: [
    RecruitService,
    CompanyService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

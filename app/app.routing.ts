import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecruitsComponent }      from './recruit/recruit.component';
import { CompanyComponent }    from './company/company.component';
import { RecruitDetailsComponent }  from './recruit-details/recruit-details.component';
import { VacancyComponent }  from './vacancy/vacancy.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/companies',
    pathMatch: 'full'
  },

  {
    path: 'recruits',
    component: RecruitsComponent
  },

  {
    path: 'companies',
    component: CompanyComponent
  },
    
  {
    path: 'recruit/details/:id',
    component: RecruitDetailsComponent
  },


];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
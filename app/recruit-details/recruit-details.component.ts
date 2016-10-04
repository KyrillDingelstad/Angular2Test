import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { RecruitService } from '../services/recruit.service';
import { Recruit }        from '../recruit/recruit';

@Component({
  selector: 'recruit-details',
  templateUrl: 'app/recruit-details/recruit-details.component.html',
  styleUrls: ['app/recruit-details/recruit-details.component.css'],
})
export class RecruitDetailsComponent implements OnInit {

  @Input()
  recruit: Recruit;

  constructor(
    private recruitService: RecruitService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {

    if(this.recruit) return;
      this.route.params.forEach((params: Params) => {
        let id = +params['id'];
        this.recruitService.getRecruit(id)
          .then(recruit => this.recruit = recruit);
    });
 }
 goBack(): void {
  this.location.back();
 }

 save(): void {
    this.recruitService.update(this.recruit)
    .then(() => this.goBack());
  }  
}

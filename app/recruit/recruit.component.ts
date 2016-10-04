import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recruit } from './Recruit';
import { RecruitService } from '../services/recruit.service';


@Component({
  selector: 'recruits',
  templateUrl: 'app/recruit/recruit.component.html',
  styleUrls: ['app/recruit/recruit.component.css'],
  providers: [RecruitService]
})

export class RecruitsComponent implements OnInit{
  recruits: Recruit[];
  selectedRecruit: Recruit;
  addText = 'Add a recruit';
  constructor(
    private router: Router,
    private RecruitService: RecruitService) { }
  getRecruits(): void {
    this.RecruitService.getRecruits().then(recruits => this.recruits = recruits);
  }
  ngOnInit(): void {
    this.getRecruits();
  }
  onSelect(recruit: Recruit): void {
    this.selectedRecruit = recruit;
  }
  gotoDetail(): void {
    this.router.navigate(['/recruit/details', this.selectedRecruit.id]);
  }

  onInputClicked(){
    if(this.addText === 'Add a recruit') this.addText = '';
  }
  onBlur() {
    if(this.addText.length === 0 ) this.addText = 'Add a recruit';
    this.addText = this.addText;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.RecruitService.create(name)
      .then(recruit => {
        this.recruits.push(recruit);
        this.selectedRecruit = null;
      });
  }

  delete(recruit: Recruit): void {
  this.RecruitService
      .delete(recruit.id)
      .then(() => {
        this.recruits = this.recruits.filter(h => h !== recruit);
        if (this.selectedRecruit === recruit) { this.selectedRecruit = null; }
      });
  }

}

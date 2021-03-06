import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { SkillService } from '../../employees/services/skill.service';
import { Skill } from '../../employees/models/skill.model';
import { Solution } from '../../employees/models/solution.model';
import { SolutionService } from '../../employees/services/solution.service';
import { SkillType } from '../../employees/models/skillType.model';
import { SkillTypeService } from '../../employees/services/skill-type.service';
import { MatButtonToggleGroup, MAT_CHIPS_DEFAULT_OPTIONS } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { SkillListItem } from '../../employees/models/skill-list-item.model';

@Component({
  selector: 'selected-skill-list',
  templateUrl: './selected-skill-list.component.html',
  styleUrls: ['./selected-skill-list.component.css']
})
export class SelectedSkillListComponent implements OnInit {

  selectedSkillIds: string[] = [];
  selectedSolutionIds: string[];
  employeeId: number;
  skills: SkillListItem[]
  solutions: Solution[]
  filteredSkills: SkillListItem[]
  skillTypes: SkillType[]
  listedSkillsTypeIds: string[];
  selectedTypeIds: string[];
  filteredSkillTypes: SkillType[];
  @Output() updateSkillsEvent = new EventEmitter() 

  constructor(private skillService: SkillService, private solutionService: SolutionService, private skillTypeService:SkillTypeService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.solutions = this.solutionService.getSolutions() 
    this.skillTypes = this.skillTypeService.getSkillTypes();
    this.employeeId = +this.route.snapshot.params['id']
    this.getEmployeeSkills();
    this.filterSkillTypeOptions();

  }

  getEmployeeSkills() {
    this.skillService.getEmployeeSkills(this.employeeId).subscribe((skills) => {
      this.skills = skills;
      this.filteredSkills = skills.slice();
    })
  }

  removeSkills() {
    let selectedSkillsNum = this.selectedSkillIds.map((id) => {
      return +id
    })
    this.skillService.removeEmployeeSkills(selectedSkillsNum).subscribe(
      result => {},
      error => console.log(error),
      () => {
        this.getEmployeeSkills()
        this.updateSkillsEvent.emit("updateAvailableSkills")
      }
    )  
  }

  //Main filter function


  filterSkills() {
    let areSolutions = (this.selectedSolutionIds && this.selectedSolutionIds.length > 0) ? true : false
    let areTypes = (this.selectedTypeIds && this.selectedTypeIds.length > 0) ? true : false
    if (areSolutions && areTypes) {
      this.filteredSkills = this.skills.filter((skill) => {
        return this.selectedSolutionIds.includes(skill.solutionId.toString()) 
        && this.selectedTypeIds.includes(skill.skillTypeId.toString())
      })
    } else if (areSolutions && !areTypes) {
      this.filteredSkills = this.skills.filter((skill) => {
        return this.selectedSolutionIds.includes(skill.solutionId.toString()) 
      })
    } else if (!areSolutions && areTypes) {
      this.filteredSkills = this.skills.filter((skill) => {
        return this.selectedTypeIds.includes(skill.skillTypeId.toString())
      })
    } else {
      this.filteredSkills = this.skills; 
    }
    this.filterSkillTypeOptions(this.selectedSolutionIds); 
  }

  clearFilters() {
    this.selectedSolutionIds = []; 
    this.selectedTypeIds = []; 
  }

  //Gets the type ids for the currently selected solutions
  getSolutionSkillTypeIds(selectedSolutions: string[]) {
    return this.skills.map((skill) => {
      if (selectedSolutions.includes(skill.solutionId.toString())) {
        return skill.skillTypeId.toString();
      }       
    })
  }

  //Filters the Skill Type options based on the currently selected solutions
  filterSkillTypeOptions(selectedSolutions?: string[]) {
    if (selectedSolutions && selectedSolutions.length > 0) {
      this.filteredSkillTypes = this.skillTypes.filter((type) => {
        return this.getSolutionSkillTypeIds(selectedSolutions).includes(type.id.toString()); 
      })
    } else {
      this.filteredSkillTypes = this.skillTypes
    }
  }

  searchSkills(searchValue:string) {
    this.clearFilters(); 
    this.filteredSkills = this.skills.filter((skill) => {
      return skill.skillName.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
    })
  }

}

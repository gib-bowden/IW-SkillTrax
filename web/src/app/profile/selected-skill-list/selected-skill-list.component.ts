import { Component, OnInit, ViewChild } from '@angular/core';
import { SkillService } from '../../employees/services/skill.service';
import { Skill } from '../../employees/models/skill.model';
import { Solution } from '../../employees/models/solution.model';
import { SolutionService } from '../../employees/services/solution.service';
import { SkillType } from '../../employees/models/skillType.model';
import { SkillTypeService } from '../../employees/services/skill-type.service';
import { MatButtonToggleGroup, MAT_CHIPS_DEFAULT_OPTIONS } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'selected-skill-list',
  templateUrl: './selected-skill-list.component.html',
  styleUrls: ['./selected-skill-list.component.css']
})
export class SelectedSkillListComponent implements OnInit {

  selectedSkillIds: string[];
  selectedSolutionIds: string[];
  employeeId: number;
  skills: Skill[]
  solutions: Solution[]
  filteredSkills: Skill[]
  skillTypes: SkillType[]
  listedSkillsTypeIds: string[];
  selectedTypeIds: string[];
  @ViewChild('solutionFilter') solutionFilter: MatButtonToggleGroup
  filteredSkillTypes: SkillType[]; 

  constructor(private skillService: SkillService, private solutionService: SolutionService, private skillTypeService:SkillTypeService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.solutions = this.solutionService.getSolutions() 
    this.skills = this.skillService.getSkills(); 
    this.skillTypes = this.skillTypeService.getSkillTypes();
    this.employeeId = +this.route.snapshot.params['id']
    this.getEmployeeSkills(this.employeeId);
    this.filteredSkills = this.skills.slice(); //copy of skills, dynamic with filtering
    this.filterSkillTypeOptions();

  }

  getEmployeeSkills(employeeId: number) {
    this.selectedSkillIds = this.skillService.getEmployeeSkills(employeeId).map((id) => {
      return id.toString();
    })
  }

  addSkills() {
    let selectedCertsNum = this.selectedSkillIds.map((id) => {
      return +id
    })
    this.skillService.addEmployeeSkills(this.employeeId, selectedCertsNum)
  }

  //Main filter function


  filterSkills() {
    let areSolutions = (this.selectedSolutionIds && this.selectedSolutionIds.length > 0) ? true : false
    let areTypes = (this.selectedTypeIds && this.selectedTypeIds.length > 0) ? true : false
    if (areSolutions && areTypes) {
      this.filteredSkills = this.skills.filter((skill) => {
        return this.selectedSolutionIds.includes(skill.solutionId.toString()) 
        && this.selectedTypeIds.includes(skill.typeId.toString())
      })
    } else if (areSolutions && !areTypes) {
      this.filteredSkills = this.skills.filter((skill) => {
        return this.selectedSolutionIds.includes(skill.solutionId.toString()) 
      })
    } else if (!areSolutions && areTypes) {
      this.filteredSkills = this.skills.filter((skill) => {
        return this.selectedTypeIds.includes(skill.typeId.toString())
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
        return skill.typeId.toString();
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
      return skill.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
    })
  }

}

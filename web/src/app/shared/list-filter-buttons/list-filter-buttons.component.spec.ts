import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFilterButtonsComponent } from './list-filter-buttons.component';

describe('ListFilterButtonsComponent', () => {
  let component: ListFilterButtonsComponent;
  let fixture: ComponentFixture<ListFilterButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFilterButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFilterButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectreferenceComponent } from './projectreference.component';

describe('ProjectreferenceComponent', () => {
  let component: ProjectreferenceComponent;
  let fixture: ComponentFixture<ProjectreferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectreferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

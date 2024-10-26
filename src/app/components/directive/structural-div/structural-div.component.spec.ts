import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDivComponent } from './structural-div.component';

describe('StructuralDivComponent', () => {
  let component: StructuralDivComponent;
  let fixture: ComponentFixture<StructuralDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralDivComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

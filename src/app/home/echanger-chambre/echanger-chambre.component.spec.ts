import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchangerChambreComponent } from './echanger-chambre.component';

describe('EchangerChambreComponent', () => {
  let component: EchangerChambreComponent;
  let fixture: ComponentFixture<EchangerChambreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchangerChambreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchangerChambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

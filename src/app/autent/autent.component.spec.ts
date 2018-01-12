import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutentComponent } from './autent.component';

describe('AutentComponent', () => {
  let component: AutentComponent;
  let fixture: ComponentFixture<AutentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

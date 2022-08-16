import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradoresAddComponent } from './colaboradores-add.component';

describe('ColaboradoresAddComponent', () => {
  let component: ColaboradoresAddComponent;
  let fixture: ComponentFixture<ColaboradoresAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColaboradoresAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaboradoresAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

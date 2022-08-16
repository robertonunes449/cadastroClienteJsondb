import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradoresDeleteComponent } from './colaboradores-delete.component';

describe('ColaboradoresDeleteComponent', () => {
  let component: ColaboradoresDeleteComponent;
  let fixture: ComponentFixture<ColaboradoresDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColaboradoresDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaboradoresDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCursoComponent } from './crear.component';

describe('CrearComponent', () => {
  let component: CrearCursoComponent;
  let fixture: ComponentFixture<CrearCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearCursoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

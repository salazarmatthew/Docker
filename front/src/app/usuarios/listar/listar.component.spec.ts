import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarUsuariosComponent } from './listar.component';

describe('ListarComponent', () => {
  let component: ListarUsuariosComponent;
  let fixture: ComponentFixture<ListarUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarUsuariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

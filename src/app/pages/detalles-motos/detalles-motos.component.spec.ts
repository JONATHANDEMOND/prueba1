import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesMotosComponent } from './detalles-motos.component';

describe('DetallesMotosComponent', () => {
  let component: DetallesMotosComponent;
  let fixture: ComponentFixture<DetallesMotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesMotosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetallesMotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

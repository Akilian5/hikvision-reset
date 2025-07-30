import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Funciona } from './funciona';

describe('Funciona', () => {
  let component: Funciona;
  let fixture: ComponentFixture<Funciona>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Funciona]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Funciona);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

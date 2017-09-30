import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoncesAValiderComponent } from './annonces-avalider.component';

describe('AnnoncesAValiderComponent', () => {
  let component: AnnoncesAValiderComponent;
  let fixture: ComponentFixture<AnnoncesAValiderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnoncesAValiderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnoncesAValiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

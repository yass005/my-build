import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoncesValideComponent } from './annonces-valide.component';

describe('AnnoncesValideComponent', () => {
  let component: AnnoncesValideComponent;
  let fixture: ComponentFixture<AnnoncesValideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnoncesValideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnoncesValideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

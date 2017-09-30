import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirAnnonceComponent } from './voir-annonce.component';

describe('VoirAnnonceComponent', () => {
  let component: VoirAnnonceComponent;
  let fixture: ComponentFixture<VoirAnnonceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoirAnnonceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

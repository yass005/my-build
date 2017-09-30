import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierCategorieComponent } from './modifier-categorie.component';

describe('ModifierCategorieComponent', () => {
  let component: ModifierCategorieComponent;
  let fixture: ComponentFixture<ModifierCategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierCategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

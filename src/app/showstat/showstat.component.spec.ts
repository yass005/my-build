import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowstatComponent } from './showstat.component';

describe('ShowstatComponent', () => {
  let component: ShowstatComponent;
  let fixture: ComponentFixture<ShowstatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowstatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowstatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhalanxComponent } from './phalanx.component';

describe('PhalanxComponent', () => {
  let component: PhalanxComponent;
  let fixture: ComponentFixture<PhalanxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhalanxComponent]
    });
    fixture = TestBed.createComponent(PhalanxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

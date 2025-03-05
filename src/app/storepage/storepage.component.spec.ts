import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorepageComponent } from './storepage.component';

describe('StorepageComponent', () => {
  let component: StorepageComponent;
  let fixture: ComponentFixture<StorepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StorepageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StorepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

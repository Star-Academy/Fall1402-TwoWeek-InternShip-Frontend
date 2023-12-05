import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferGameComponent } from './offer-game.component';

describe('OfferGameComponent', () => {
  let component: OfferGameComponent;
  let fixture: ComponentFixture<OfferGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OfferGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

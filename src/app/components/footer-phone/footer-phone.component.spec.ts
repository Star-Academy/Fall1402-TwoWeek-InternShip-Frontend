import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPhoneComponent } from './footer-phone.component';

describe('FooterPhoneComponent', () => {
  let component: FooterPhoneComponent;
  let fixture: ComponentFixture<FooterPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterPhoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

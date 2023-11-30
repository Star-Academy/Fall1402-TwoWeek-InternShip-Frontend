import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularGameComponent } from './popular-game.component';

describe('PopularGameComponent', () => {
  let component: PopularGameComponent;
  let fixture: ComponentFixture<PopularGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopularGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

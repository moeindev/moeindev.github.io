import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaInformationComponent } from './social-media-information.component';

describe('SocialMediaInformationComponent', () => {
  let component: SocialMediaInformationComponent;
  let fixture: ComponentFixture<SocialMediaInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialMediaInformationComponent]
    });
    fixture = TestBed.createComponent(SocialMediaInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

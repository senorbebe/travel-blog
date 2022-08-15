import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoHeroComponent } from './video-hero.component';

describe('VideoHeroComponent', () => {
  let component: VideoHeroComponent;
  let fixture: ComponentFixture<VideoHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

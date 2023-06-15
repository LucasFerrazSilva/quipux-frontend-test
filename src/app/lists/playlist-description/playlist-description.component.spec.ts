import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistDescriptionComponent } from './playlist-description.component';

describe('PlaylistDescriptionComponent', () => {
  let component: PlaylistDescriptionComponent;
  let fixture: ComponentFixture<PlaylistDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaylistDescriptionComponent]
    });
    fixture = TestBed.createComponent(PlaylistDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

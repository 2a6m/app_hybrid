import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateArtistPage } from './update-artist.page';

describe('UpdateArtistPage', () => {
  let component: UpdateArtistPage;
  let fixture: ComponentFixture<UpdateArtistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateArtistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateArtistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

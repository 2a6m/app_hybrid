import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArtistPage } from './add-artist.page';

describe('AddArtistPage', () => {
  let component: AddArtistPage;
  let fixture: ComponentFixture<AddArtistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddArtistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddArtistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

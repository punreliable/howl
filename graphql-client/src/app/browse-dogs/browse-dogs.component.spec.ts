import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseDogsComponent } from './browse-dogs.component';

describe('BrowseDogsComponent', () => {
  let component: BrowseDogsComponent;
  let fixture: ComponentFixture<BrowseDogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseDogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowseDogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

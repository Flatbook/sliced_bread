import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BevAboutComponent } from './bev-about.component';

describe('BevAboutComponent', () => {
  let component: BevAboutComponent;
  let fixture: ComponentFixture<BevAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BevAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BevAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

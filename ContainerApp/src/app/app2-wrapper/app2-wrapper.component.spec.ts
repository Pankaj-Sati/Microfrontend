import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App2WrapperComponent } from './app2-wrapper.component';

describe('App2WrapperComponent', () => {
  let component: App2WrapperComponent;
  let fixture: ComponentFixture<App2WrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ App2WrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(App2WrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

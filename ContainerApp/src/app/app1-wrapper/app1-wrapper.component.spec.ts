import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App1WrapperComponent } from './app1-wrapper.component';

describe('App1WrapperComponent', () => {
  let component: App1WrapperComponent;
  let fixture: ComponentFixture<App1WrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ App1WrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(App1WrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

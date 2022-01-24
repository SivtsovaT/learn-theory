import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloTomComponent } from './hello-tom.component';

describe('HelloTomComponent', () => {
  let component: HelloTomComponent;
  let fixture: ComponentFixture<HelloTomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloTomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloTomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

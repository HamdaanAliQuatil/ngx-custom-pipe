import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCustomPipeComponent } from './ngx-custom-pipe.component';

describe('NgxCustomPipeComponent', () => {
  let component: NgxCustomPipeComponent;
  let fixture: ComponentFixture<NgxCustomPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxCustomPipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxCustomPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

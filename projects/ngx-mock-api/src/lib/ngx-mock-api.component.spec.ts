import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMockApiComponent } from './ngx-mock-api.component';

describe('NgxMockApiComponent', () => {
  let component: NgxMockApiComponent;
  let fixture: ComponentFixture<NgxMockApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxMockApiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxMockApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

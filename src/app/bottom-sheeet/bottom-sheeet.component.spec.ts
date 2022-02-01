import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheeetComponent } from './bottom-sheeet.component';

describe('BottomSheeetComponent', () => {
  let component: BottomSheeetComponent;
  let fixture: ComponentFixture<BottomSheeetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomSheeetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomSheeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

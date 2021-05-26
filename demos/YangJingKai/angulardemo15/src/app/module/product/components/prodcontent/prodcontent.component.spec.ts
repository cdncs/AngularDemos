import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdcontentComponent } from './prodcontent.component';

describe('ProdcontentComponent', () => {
  let component: ProdcontentComponent;
  let fixture: ComponentFixture<ProdcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

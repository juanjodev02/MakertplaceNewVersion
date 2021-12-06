import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsResumeComponent } from './products-resume.component';

describe('ProductsResumeComponent', () => {
  let component: ProductsResumeComponent;
  let fixture: ComponentFixture<ProductsResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

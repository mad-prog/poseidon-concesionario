import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CochesTableListComponent } from './coches-table-list.component';

describe('CochesTableListComponent', () => {
  let component: CochesTableListComponent;
  let fixture: ComponentFixture<CochesTableListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CochesTableListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CochesTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

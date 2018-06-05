import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NosostrosComponent } from './nosostros.component';

describe('NosostrosComponent', () => {
  let component: NosostrosComponent;
  let fixture: ComponentFixture<NosostrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NosostrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NosostrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

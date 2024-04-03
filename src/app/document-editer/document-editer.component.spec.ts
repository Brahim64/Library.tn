import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentEditerComponent } from './document-editer.component';

describe('DocumentEditerComponent', () => {
  let component: DocumentEditerComponent;
  let fixture: ComponentFixture<DocumentEditerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentEditerComponent]
    });
    fixture = TestBed.createComponent(DocumentEditerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

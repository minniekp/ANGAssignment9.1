import { TestBed, inject } from '@angular/core/testing';

import { TodoDropDownService } from './todo-drop-down.service';

describe('TodoDropDownService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDropDownService]
    });
  });

  it('should be created', inject([TodoDropDownService], (service: TodoDropDownService) => {
    expect(service).toBeTruthy();
  }));
});

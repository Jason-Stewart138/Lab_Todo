import { TestBed } from '@angular/core/testing';

import { TodoRepoService } from './todo-repo.service';

describe('TodoRepoService', () => {
  let service: TodoRepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoRepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

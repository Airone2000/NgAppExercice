import { BookRouterModule } from './book-router.module';

describe('BookRouterModule', () => {
  let bookRouterModule: BookRouterModule;

  beforeEach(() => {
    bookRouterModule = new BookRouterModule();
  });

  it('should create an instance', () => {
    expect(bookRouterModule).toBeTruthy();
  });
});

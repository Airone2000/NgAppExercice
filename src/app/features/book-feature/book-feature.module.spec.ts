import { BookFeatureModule } from './book-feature.module';

describe('BookFeatureModule', () => {
  let bookFeatureModule: BookFeatureModule;

  beforeEach(() => {
    bookFeatureModule = new BookFeatureModule();
  });

  it('should create an instance', () => {
    expect(bookFeatureModule).toBeTruthy();
  });
});

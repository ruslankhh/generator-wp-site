import path from 'path';
import assert from 'yeoman-assert';
import helpers from 'yeoman-test';

describe('generator-wp-app:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../build/generators/app'))
      .withPrompts({ someAnswer: true });
  });

  it('creates files', () => {
    assert.file(['dummyfile.txt']);
  });
});
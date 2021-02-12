import sampleObject from '~/index';

test('Should have string property called `data`', () => {
  expect(typeof sampleObject.data).toBe('string');
});

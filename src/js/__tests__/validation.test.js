import Validator from "../../class/Validator";
import {expect, jest, test} from '@jest/globals';

test('Luhn test', () => {
  const result = new Validator();

  expect(result.checkLuhn('4916293035632963')).toBe(true);
  expect(result.checkLuhn('4916295632963')).toBe(false);
});

test('valid card test', () => {
  const result = new Validator();

  expect(result.validCard('4916293035632963')).toBe('visa');
  expect(result.validCard('2200700152298930')).toBe('mir');
  expect(result.validCard('5256331954465133')).toBe('mc');
  expect(result.validCard('371579115435103')).toBe('ae');
});

/* eslint-disable jest/no-identical-title */
/* eslint-disable jest/no-conditional-expect */
import PaymentSystem from '../PaymentSystem';
import Validator from '../Validator';

test('testing Visa', () => {
   const visa = '4485829216399822';
   expect(PaymentSystem.check(visa)).toEqual('visa');
});

test('testing MasterCard', () => {
   const masterCard = '5495391688245194';
   expect(PaymentSystem.check(masterCard)).toEqual('master-card');
});

test('testing Mir', () => {
   const mir = '2221003455848427';
   expect(PaymentSystem.check(mir)).toEqual('mir');
});

test('testing noname', () => {
   const noname = '370675058956278';
   try {
      PaymentSystem.check(noname);
   } catch (err) {
      expect(err.message).toEqual('Unsupported card type');
   }
});

test('should validate right card', () => {
   const emptyCard = '';
   expect(Validator.validation(emptyCard)).toBe(false);
});

test('should validate right card', () => {
   const rightCard = '5511217984277203';
   expect(Validator.validation(rightCard)).toBe(true);
});

test('should validate wrong card', () => {
   const wrongCard = '55112179842';
   expect(Validator.validation(wrongCard)).toBe(false);
});

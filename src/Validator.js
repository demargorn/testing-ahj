class Validator {
   static validation(number) {
      let sum = 0;
      if (number.length === 0) {
         return false;
      }
      for (let i = 0; i < number.length; i += 1) {
         let cardNum = parseInt(number[i], 10);
         if ((number.length - i) % 2 === 0) {
            cardNum *= 2;
            if (cardNum > 9) {
               cardNum -= 9;
            }
         }
         sum += cardNum;
      }
      return sum % 10 === 0;
   }
}
export default Validator;

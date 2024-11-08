class PaymentSystem {
   static check(number) {
      if (number.startsWith('4')) {
         return 'visa';
      }

      if (
         number.startsWith('51') ||
         number.startsWith('52') ||
         number.startsWith('53') ||
         number.startsWith('54') ||
         number.startsWith('55')
      ) {
         return 'master-card';
      }

      if (number.startsWith('2')) {
         return 'mir';
      }
      
      throw new Error('Unsupported card type');
   }
}

export default PaymentSystem;

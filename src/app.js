import PaymentSystem from './PaymentSystem';
import Validator from './Validator';

const container = document.querySelector('.container');
const entryField = document.querySelector('.entry-field');
const button = document.querySelector('.button');

function deleteTheme() {
   container.classList.remove('visa-theme');
   container.classList.remove('master-card-theme');
   container.classList.remove('mir-theme');
}

function insertText(data) {
   if (data !== null && data.match('\\d')) {
      let entryFieldValue = '';
      const numberCard = entryField.value.replaceAll(' ', '');
      for (let i = 0; i < numberCard.length; i += 1) {
         if (i === 0 || i % 4 !== 0) {
            entryFieldValue += numberCard[i];
         } else {
            entryFieldValue = `${entryFieldValue} ${numberCard[i]}`;
         }
      }
      entryField.value = entryFieldValue;
   } else {
      entryField.value = entryField.value.replaceAll(data, '');
   }
   try {
      deleteTheme();
      const typeCard = PaymentSystem.check(entryField.value);
      container.classList.add(`${typeCard}-theme`);
   } catch (error) {
      console.warn(error.message);
   }
}

entryField.addEventListener('input', (e) => {
   if (e.inputType === 'insertText') {
      insertText(e.data);
   }
   if (entryField.value === '') {
      deleteTheme();
   }
});

entryField.addEventListener('paste', (e) => {
   e.preventDefault();
   const clipboardData = e.clipboardData.getData('text');
   entryField.value = clipboardData;

   for (let i = 0; i < clipboardData.length; i += 1) {
      insertText(clipboardData[i]);
   }
});

button.addEventListener('click', (e) => {
   e.preventDefault();
   const numberCard = entryField.value.replaceAll(' ', '');
   if (!Validator.validation(numberCard)) {
      alert('Невалидный номер карты');
   } else {
      alert('Номер карты валидный');
   }
});

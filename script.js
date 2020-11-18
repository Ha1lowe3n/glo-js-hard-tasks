document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const convertValue = document.querySelector('.convert_result'),
        select = document.getElementById('cur1'),
        input = document.getElementById('val'),
        btn = document.getElementById('btn'),
        urlUSD = 'https://api.exchangeratesapi.io/latest?base=USD',
        urlRUB = 'https://api.exchangeratesapi.io/latest?base=RUB';

  let x, y = '';

  input.disabled = true;

  const getData = (url) => {
    return fetch(url)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error(`${response.status} (${response.statusText})`);
      } 
    })
    .then((data) => {
      if (url === urlUSD) {
        x = data.rates[y];
      }

      if (url === urlRUB) {
        x = data.rates[y];
      }
    })
    .catch(error => console.error(error));

  };

  const usdFunc = () => {
    y = 'RUB';
    input.value = '';
    getData(urlUSD);
    convertValue.textContent = `0.000 ${y}`;
  };

  const rubFunc = () => {
    input.value = '';
    y = 'USD';
    getData(urlRUB);
    convertValue.textContent = `0.000 ${y}`;
  };

  select.addEventListener('change', () => {
    input.disabled = false;
    if (select.options.selectedIndex === 0) {
      input.disabled = true;
      input.value = '';
      convertValue.textContent = `0.000`;
    }

    if (select.value === 'USD') {
      usdFunc();
    }

    if (select.value === 'RUB') {
      rubFunc();
    } 
  });

  btn.addEventListener('click', () => {
    if (input.value.trim() !== '') {
      convertValue.textContent = (input.value * x).toFixed(3) + ` ${y}`;
    } else {
      convertValue.textContent = `0.000 ${y}`;
    }
  });
});
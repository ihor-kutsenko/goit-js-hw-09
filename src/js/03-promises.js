import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', createChangePromise);

function createChangePromise(event) {
  event.preventDefault();

  const delayInput = document.querySelector('input[name="delay"]');
  const stepInput = document.querySelector('input[name="step"]');
  const amountInput = document.querySelector('input[name="amount"]');

  const delay = Number(delayInput.value);
  const step = Number(stepInput.value);
  const amount = Number(amountInput.value);

  

  const arrayPromise = [
    {
      delay: delay,
      position: 1
    }
  ];


   for (let i = 1; i < amount; i += 1) {
    const currentDelay = arrayPromise[i - 1].delay + step;
    arrayPromise.push({ delay: currentDelay, position: i + 1 });
  }

  const promises = arrayPromise.map((arr) => {
    return createPromise(arr.position, arr.delay)
    .then((messageOk) => {Notiflix.Notify.success(messageOk)})
    .catch((messageErr) => {Notiflix.Notify.warning(messageErr)})
  });

};


function createPromise(position, delay) {

  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
    resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    reject(`❌ Rejected promise ${position} in ${delay}ms`)
  }
    }, delay)
  })
  
  
};

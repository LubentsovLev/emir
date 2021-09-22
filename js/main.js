$(function () {});

function numberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
// calculator
// calculator
// calculator
let js__ammount_cur = document.querySelector('.js__ammount_cur');
let js__mounts = document.querySelector('.js__mounts');
let js__mounts_2 = document.querySelector('.js__mounts_2');

let js__price = document.querySelector('.js__price');

const calcAmount = (num) => {
  num = num.split(' ').join('');
  let mPriceDesc = document.querySelectorAll('.calc__graph-graph-text');
  let js__approc = document.querySelectorAll('.js__approc');
  let calc__graph_graph = document.querySelector('.calc__graph-graph');

  js__price.innerHTML = numberWithSpaces(num);

  switch (num) {
    case '100':
      calc__graph_graph.id = 'price1';
      break;

    case '300':
      calc__graph_graph.id = 'price2';
      break;
    case '500':
      calc__graph_graph.id = 'price3';
      break;
    case '1000':
      calc__graph_graph.id = 'price4';
      break;
    case '3000':
      calc__graph_graph.id = 'price5';
      break;
    case '5000':
      calc__graph_graph.id = 'price6';
      break;
    case '10000':
      calc__graph_graph.id = 'price7';
      break;
    case '20000':
      calc__graph_graph.id = 'price8';
      break;
    case '30000':
      calc__graph_graph.id = 'price9';
      break;
    case '50000':
      calc__graph_graph.id = 'price10';
      break;
    default:
      calc__graph_graph.id = 'price2';
      break;
  }
  js__ammount_cur.innerHTML = numberWithSpaces(
    0.25 * +num * +js__mounts.innerHTML
  );

  for (let i = 0; i < mPriceDesc.length; i++) {
    // i = i + 1;
    // mPriceDesc[1].innerHTML = '$' + 0.25 * num;
    mPriceDesc[i].innerHTML = '$' + numberWithSpaces(0.25 * +num * (i + 1));
    js__approc[0].innerHTML =
      '$' + numberWithSpaces(0.25 * +num * (11 + 1) - num);
    js__approc[1].innerHTML =
      '$' + numberWithSpaces(0.25 * +num * (11 + 1) - num);
  }
};

const calcMoun = (value) => {
  js__mounts.innerHTML = value;
  js__mounts_2.innerHTML = value;
};
calcAmount('300');

document.addEventListener('click', function (e) {
  let nums = document.querySelectorAll('.js-price');

  if (e.target.className.includes('js-price')) {
    for (let i = 0; i < nums.length; i++) {
      nums[i].classList.remove('active');
    }
    e.target.classList.add('active');
    calcAmount(e.target.lastElementChild.innerHTML);
  }
  if (e.target.parentNode.className.includes('js-price')) {
    for (let i = 0; i < nums.length; i++) {
      nums[i].classList.remove('active');
    }
    e.target.parentNode.classList.add('active');
    calcAmount(e.target.innerHTML);
  }
});

document.addEventListener('input', function (e) {
  if (e.target.className.includes('input-amm')) {
    let numm = '0';
    switch (e.target.value) {
      case '1':
        numm = '100';
        break;
      case '2':
        numm = '300';
        break;

      case '3':
        numm = '500';
        break;

      case '4':
        numm = '1000';
        break;
      case '5':
        numm = '3000';
        break;
      case '6':
        numm = '5000';
        break;
      case '7':
        numm = '10000';
        break;
      case '8':
        numm = '20000';
        break;
      case '9':
        numm = '30000';
        break;
      case '10':
        numm = '50000';
        break;
      default:
        numm = '100';
        break;
    }
    if (e.target.value === '0') {
      e.target.value = '1';
    }

    calcAmount(numm);
  }
  if (e.target.className.includes('input-moun')) {
    if (e.target.value === '0') {
      e.target.value = '1';
    }
    calcMoun(e.target.value);
    calcAmount(js__price.innerHTML);
  }
});
// calculator flip
// calculator flip
// calculator flip

const calc__flip_1 = document.querySelector('.calc__flip-1');
const calc__flip_2 = document.querySelector('.calc__flip-2');

// calculator flip 1

const js__calc_mob_1_1 = document.querySelector('.js__calc_mob_1_1');
const js__calc_mob_1_2 = document.querySelector('.js__calc_mob_1_2');

// calculator flip 1

// calculator flip 2

const js__calc_mob_2_1 = document.querySelector('.js__calc_mob_2_1');
const js__calc_mob_2_2 = document.querySelector('.js__calc_mob_2_2');
const js__calc_mob_2_3 = document.querySelector('.js__calc_mob_2_3');
// const js__calc_mob_2_4 = document.querySelector('.js__calc_mob_2_4');
// const js__calc_mob_2_5 = document.querySelector('.js__calc_mob_2_5');
// calculator flip 2

const calcFilp = (num) => {
  if (num === 1) {
    js__calc_mob_2_1.classList.add('hide');
    js__calc_mob_2_2.classList.add('hide');
    // js__calc_mob_2_3.classList.remove('active');

    js__calc_mob_1_1.classList.remove('hide');
    js__calc_mob_1_2.classList.remove('hide');
    js__calc_mob_1_1.classList.add('active');
    js__calc_mob_1_2.classList.add('active');
  }
  if (num === 2) {
    js__calc_mob_1_1.classList.add('hide');
    js__calc_mob_1_2.classList.add('hide');

    js__calc_mob_2_1.classList.remove('hide');
    js__calc_mob_2_2.classList.remove('hide');
    js__calc_mob_2_1.classList.add('active');
    js__calc_mob_2_2.classList.add('active');
    js__calc_mob_2_3.classList.add('active');
  }
};
if (document.documentElement.clientWidth < 655) {
  calcFilp(2);
}

let calc__act__type = 2;

document.addEventListener('click', function (e) {
  if (
    e.target.className.includes('calc__flip-1') ||
    e.target.parentNode.className.includes('calc__flip-1')
  ) {
    calc__flip_1.classList.add('active');
    calc__flip_2.classList.remove('active');
    calc__act__type = 1;
    calcFilp(1);
  }
  if (
    e.target.className.includes('calc__flip-2') ||
    e.target.parentNode.className.includes('calc__flip-2')
  ) {
    calc__flip_2.classList.add('active');
    calc__flip_1.classList.remove('active');
    calc__act__type = 2;
    calcFilp(2);
  }
});

document.addEventListener('click', function (e) {
  let elem = document.querySelector('.calc__graph-right-over');
  let calc__arr_1 = document.querySelector('.calc__arr-1');
  let calc__arr_2 = document.querySelector('.calc__arr-2');
  if (
    e.target.className.includes('calc__arr-1') ||
    e.target.parentNode.className.includes('calc__arr-1')
  ) {
    elem.scrollLeft = elem.scrollLeft - 120;
  }
  if (
    e.target.className.includes('calc__arr-2') ||
    e.target.parentNode.className.includes('calc__arr-2')
  ) {
    // elem.scrollLeft = 515;
    elem.scrollLeft = elem.scrollLeft + 120;
  }

  // elem.scrollLeft = 515;
});

// calculator flip
// calculator flip
// calculator flip

// calculator
// calculator
// calculator

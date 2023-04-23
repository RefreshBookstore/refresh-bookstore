import { main } from '../public/js/main.js';

const cart = document.querySelector('.cart');
// const bookTitle = document.querySelectorAll('.book-title');
// const author = document.querySelectorAll('.author')


const selectedPrice = document.querySelector('.selectedPrice');
const deliveryFee = document.querySelector('.deliveryFee');
const totalCost = document.querySelector('.totalCost');

// 예시 주문데이터
let order = [
  {
    "title":"프론트엔드 성능 최적화 가이드",
    "author":"유동균",
    "publisher":"인사이트",
    "publication_date":"2022-11-14T15:00:00.000Z",
    "isbn":"9788966263745",
    "description":"'웹 성능 최적화'는 프론트엔드 개발자라면 반드시 고민해야 하는 이슈다. 서비스 환경과 상황에 따라 필요한 최적화 포인트가 다르고, 기법도 매우 다양하기에 개발 중인 서비스 특성에 맞게 커스터마이징하는 능력이 중요하다.\n\n  저자는 수많은 기업의 웹 서비스 성능을 컨설팅하고, 삼성 SSAFY, 프로그래머스, 인프런, 스터디파이 등 강의 플랫폼에서 최적화 및 개발 강의를 진행한 경험을 책에 고스란히 녹여 냈다. '성능 최적화' 주제를 효과적으로 배우는 데 이론보다는 실습이 중요함을 강조하며 현장감 있게 구성했다. 이 책은 실생활에서 흔히 개발하는 4가지 실습 사이트를 예제로, 직관적인 최적화 노하우를 전달한다.",
    "price":22000,
    "image_path":"../product-images/9788966263745.png",
    "category":"프론트엔드",
    "amount":1,
  },
  {
    "title":"이펙티브 타입스크립트",
    "author":"댄 밴더캄",
    "publisher":"인사이트",
    "publication_date":"2021-06-08T15:00:00.000Z",
    "isbn":"9788966263134",
    "description":"타입스크립트는 타입 정보를 지닌 자바스크립트의 상위 집합으로, 자바스크립트의 골치 아픈 문제점들을 해결해 준다. 이 책은 《이펙티브 C++》와 《이펙티브 자바》의 형식을 차용해 타입스크립트의 동작 원리, 해야 할 것과 하지 말아야 할 것에 대한 구체적인 조언을 62가지 항목으로 나누어 담았다. 각 항목의 조언을 실제로 적용한 예제를 통해 연습하다 보면 타입스크립트를 효율적으로 사용하는 방법을 익힐 수 있다.",
    "price":25000,
    "image_path":"../product-images/9788966263134.png",
    "category":"프론트엔드",
    "amount":2,
  }
];
console.log(JSON.stringify(order));
// 로컬스토리지에 데이터 저장
const save = (data) => {
  localStorage.setItem('cart', JSON.stringify(data));
}
save(order);

let bookData = {
  "title":"모던 자바스크립트 Deep Dive ",
  "author":"이웅모",
  "publisher":"위키북스",
  "publication_date":"2020-09-24T15:00:00.000Z",
  "isbn":"9791158392239",
  "description":"자바스크립트를 둘러싼 기본 개념을 정확하고 구체적으로 설명하고, 자바스크립트 코드의 동작 원리를 집요하게 파헤친다. 작성한 코드가 컴퓨터 내부에서 어떻게 동작할 것인지 예측하고, 명확히 설명할 수 있도록 돕는다. 또한 최신 자바스크립트 명세를 반영해 안정적이고 효율적인 코드를 작성할 수 있는 기본기를 다지고, 실전에서 쓰이는 모던 자바스크립트 프레임워크나 도구를 완벽하게 이해하고 활용할 수 있게 도와준다.",
  "price":45000,
  "image_path":"../product-images/9791158392239.png",
  "category":"프론트엔드",
  "amount":1,
};
order.push(bookData);
save(order);

// 로컬스토리지에서 불러오기
const load = () => {
  const data = localStorage.getItem('cart');
  if (data !== null) {
    console.log(JSON.parse(data));
    return JSON.parse(data);
  } else {
    console.log('hi');
  }
};

load().forEach(order => {
  const imgLink = order.image_path;
  const title = order.title;
  const author = order.author;
  const amount = Number(order.amount);
  const bookPrice = `${(order.price * amount).toLocaleString()}원`;

  cart.innerHTML += `<div class="item">
  <input type="checkbox" name="buy" checked="">
  <!-- 책 이미지 -->
  <div class="book-img">
  <a class="book-link" href="#">
  <img src="${imgLink}" class="book-img" alt="bookImg1"/>
  </a>
  </div>
  
  <div class="book-info">
  <a class="book-title" href="#">${title}</a>
  <div class="author">${author}</div>
  </div>
  <!-- 수량 변경 -->
  <div class="amountArea">
  <button class="minusBtn">-</button>
  <input class ="amountInput" value="${amount}">
  <button class="plusBtn">+</button>
  </div>
  <!-- 상품 금액 -->
  <div class="price">
  <p class="price-title">상품 금액</p>
  <div class="book-price">${bookPrice}</div>
  </div>
  
  <!-- 삭제 버튼 -->
  <div class="delete">
  <button class="deleteBtn">삭제</button>
  </div>`;
});

// 체크박스 구현

// 상품 체크박스들
const checkboxes = document.querySelectorAll('input[name="buy"]');
// 전체선택 체크박스
const selectAll = document.querySelector('.selectAll > input');

function checkSelectAll()  {
  // 선택된 체크박스
  const checked = document.querySelectorAll('input[name="buy"]:checked');
  if (checkboxes.length === checked.length) {
    selectAll.checked = true;
    console.log(checked.length);
    console.log(selectAll.checked);
  } else selectAll.checked = false;
}
checkboxes.forEach(checkbox => checkbox.addEventListener('click', () => checkSelectAll()));

function checkAll(selectAll) {
  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAll.checked;
  });
}
selectAll.addEventListener('click', () => checkAll(selectAll));

const minusBtn = document.querySelectorAll('.minusBtn');
const amountInput = document.querySelectorAll('.amountInput');
const plusBtn = document.querySelectorAll('.plusBtn');

// 수량 증가 클릭 이벤트
plusBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.previousElementSibling.value = Number(btn.previousElementSibling.value) + 1;
  });
});  
// 수량 감소 클릭 이벤트
minusBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    if (Number(btn.nextElementSibling.value) === 1) {
      btn.nextElementSibling.value = 1;
    } else {
      btn.nextElementSibling.value = Number(btn.nextElementSibling.value) - 1;
    }
  });
});
// 수량 값을 없애면 1로 바뀌도록 함
amountInput.forEach(amount => {
  amount.addEventListener('change', () => {
    if (amount.value === '' || amount.value === undefined) {
      amount.value = 1;
    }
  });
});

// 삭제 구현
// 단일 상품 삭제
const deleteBtn = document.querySelectorAll('.deleteBtn');
deleteBtn.forEach((btn, idx) => {
  const item = btn.parentElement.parentElement;
  btn.addEventListener('click', () => item.setAttribute('style', 'display: none'));
  // btn.addEventListener('click', () => {
  //   item.classList.add(`delete${idx}`);
  //   const targetTitle = document.querySelector(`.delete${idx} .book-title`).innerText;
  //   order = [];

  // });
});

// 선택 삭제
const deleteSelectedBtn = document.querySelector('.deleteSelected');
deleteSelectedBtn.addEventListener('click', () => {
  checkboxes.forEach(box => {
    if (box.checked) box.parentElement.setAttribute('style', 'display: none');
  });
});

// 가격 계산 구현
// 단일 상품 금액 계산(미완성)
// 선택 상품 금액 계산(미완성)


// 가격 문자열에서 숫자만 반환하는 함수
function getPriceNumber(str) {
  return Number(str.replace(/,/g, '').slice(0, -1));
}

// 배송비 계산
function setDeliveryFee() {
  if (getPriceNumber(selectedPrice.innerText) >= 50000) {
    deliveryFee.innerText = '0원';
  } else {
    deliveryFee.innerText = '3,000원';
  }
}
setDeliveryFee();

// 총 결제 금액 계산
function setTotalCost() {
  const totalCostNum = getPriceNumber(selectedPrice.innerText) + getPriceNumber(deliveryFee.innerText);
  totalCost.innerText = `${totalCostNum.toLocaleString()}원`;
}
setTotalCost();



main();
"use strict";

const addBtn = document.querySelector(".footer__button");
const input = document.querySelector(".footer__input");
const items = document.querySelector(".items");

function onAdd() {
  // 이벤트를 처리하는 함수에는 보통 on이 붙는다

  // 1. 사용자가 입력한 텍스트 받아오기
  const text = input.value;
  if (text == "") {
    input.focus;
    alert("구매 항목을 제대로 입력해주세용!");
    return;
  }
  // 2. 새로운 아이템을 만든다(텍스트 + 삭제 버튼)
  const item = createItem(text);
  // 3. items 컨테이너 안에 새로 만든 아이템을 추가한다
  items.append(item);
  // 4. 인풋을 초기화 한다.
  input.value = "";
  // 5. 초기화 하고 input에 focus가 잡히게
  input.focus();
}

function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item__row");

  const item = document.createElement("div");
  item.setAttribute("class", "item");

  const name = document.createElement("span");
  name.setAttribute("class", "item__name");
  name.innerText = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "item__delete");
  deleteBtn.innerHTML = '<i class="fa-solid fa-circle-minus"></i>';
  deleteBtn.addEventListener("click", () => {
    items.removeChild(itemRow);
  });

  const itemDivider = document.createElement("div");
  itemDivider.setAttribute("class", "item__divider");

  item.append(name);
  item.append(deleteBtn);

  itemRow.append(item);
  itemRow.append(itemDivider);
  return itemRow;
}

addBtn.addEventListener("click", () => {
  onAdd();
});

// enter키를 누르면
input.addEventListener("keypress", (event) => {});

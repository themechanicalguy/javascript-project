import { getSuggestions } from "./utils.js";

// console.log(getSuggestions("G"));

//getting DOM ref
const inputBox = document.getElementById("search-input");
const suggestionBox = document.getElementById("suggestion-wrapper");

const resetDropdown = () => {
  console.log("called reset");
  suggestionBox.classList.remove("suggestion-visible");
};

const renderDropItems = (list) => {
  const suggFragment = document.createDocumentFragment();

  list.forEach((item) => {
    const el = document.createElement("div");
    el.innerHTML = item;
    el.classList.add("dropdown-item");
    el.setAttribute("data-key", item);
    suggFragment.appendChild(el);
  });

  suggestionBox.innerHTML = "";
  suggestionBox.appendChild(suggFragment);
};

const handleSearch = async (keyword) => {
  const result = await getSuggestions(keyword);
  console.log(result);

  if (result.length > 0) {
    suggestionBox.classList.add("suggestion-visible");
    // suggestionBox.innerHTML
    renderDropItems(result);
  } else {
    resetDropdown();
  }
};

const handleInputChange = (event) => {
  // debugger;
  const value = event.target.value;
  // debugger;
  console.log(value);
  if (value) {
    handleSearch(value);
  } else {
    resetDropdown();
  }
};

//adding debouce function
const debounce = (fn, delay = 500) => {
  let timer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(context, args), delay);
  };
};
//adding event listener to input box

// const deboucingInput = (handleInputChange) => {
//   debounce(handleInputChange, 500);
// };

const handleSelect = () => {
  const { key } = event.target.dataset;
  if (key) {
    inputBox.value = key;
    resetDropdown();
  }
};

(() => {
  inputBox.addEventListener("input", debounce(handleInputChange, 500));
  suggestionBox.addEventListener("click", handleSelect);
})();

// (() => {
//   inputBox.addEventListener("input", handleInputChange);
// })();

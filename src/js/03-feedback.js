import throttle from 'lodash.throttle';

const refs = {
    form : document.querySelector(".feedback-form"),
    email : document.querySelector(".feedback-form input"),
    textarea : document.querySelector(".feedback-form textarea"),
}

const LOCALSTORAGE_KEY = "feedback-form-state";
console.log(LOCALSTORAGE_KEY);

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormData, 500));

populateInputData()
const formData = {};

function onFormData(event) {    
    formData[event.target.name] = event.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
};

function onFormSubmit(event) {
    event.preventDefault();

    console.log(populateInputData());

    localStorage.removeItem(LOCALSTORAGE_KEY);
    event.target.reset();
}

function populateInputData() {    
    const data = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    if (data) {        
        return data;        
    }    
};


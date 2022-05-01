/*.........................................................бургер-меню.................................................*/

let burger = document.querySelector('.burger');
let burgerMenu = document.querySelector('.burger_menu_wrapper');
let wrapper = document.querySelector('.wrapper');
let anchor = document.querySelectorAll('.anchor_burger');
let body = document.querySelector('body');

function  burgerToggle() {
	burger.classList.toggle('line_active');
	wrapper.classList.toggle('opacity');
	body.classList.toggle('overflow_hidden');
	if (burger.classList.contains('line_active')) {
		burgerMenu.style.display = 'flex';
		burgerMenu.classList.add('burger_menu_wrapper_active');
		burgerMenu.classList.remove('burger_menu_wrapper_no_active');
	}
	else {
		burgerMenu.classList.add('burger_menu_wrapper_no_active');
		burgerMenu.classList.remove('burger_menu_wrapper_active');
		setTimeout(function() {
			burgerMenu.style.display = 'none';
		}, 400)
	}
};

burger.addEventListener('click', burgerToggle);

for(let i = 0; i < anchor.length; i++) {
	anchor[i].addEventListener('click', burgerToggle);
};

/*.........................................................слайдер.................................................*/

let arrowLeft = document.querySelector('.arrow_left');
let arrowRight = document.querySelector('.arrow_right');
let petOne = document.querySelector('.img_pet_one');
let petTwo = document.querySelector('.img_pet_two');
let petThree = document.querySelector('.img_pet_three');
let namePetOne = document.querySelector('.name_pet_one');
let namePetTwo = document.querySelector('.name_pet_two');
let namePetThree = document.querySelector('.name_pet_three');
let ourFriendsCards = document.querySelector('.our_friends_cards');

arrowLeft.addEventListener('click', clickArrows);
arrowRight.addEventListener('click', clickArrows);

function pathOfPets (n) {
    if (n === 0) {
        return '../../assets/img/jennifer.png';
    }
    else if (n === 1) {
        return '../../assets/img/sophia.png';
    }
    else if (n === 2) {
        return '../../assets/img/woody.png';
    }
    else if (n === 3) {
        return '../../assets/img/scarlet.png';
    }
    else if (n === 4) {
        return '../../assets/img/katrine.png';
    }
    else if (n === 5) {
        return '../../assets/img/timmy.png';
    }
    else if (n === 6) {
        return '../../assets/img/freddie.png';
    }
    else if (n === 7) {
        return '../../assets/img/charly.png';
    }
}

function getRandomInRange (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function isHereDouble (arr, test) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === test) {
        return false;
      }
    };
    return true;
};

let petName = ['Jennifer', 'Sophia', 'Woody', 'Scarlett', 'Katrine', 'Timmy', 'Freddie', 'Charly'];
let arrNow = [];
let arrNext = [];
let random;

function getArrayNext () {
    arrNow = [];
    arrNow = [arrNext[0], arrNext[1], arrNext[2]];
    arrNext = [];
    while (arrNext.length < 3) {
        random = getRandomInRange (0, 7);
        if (isHereDouble (arrNow, random)) {
            if (isHereDouble (arrNext, random))
            arrNext.push(random);
        };
    };
};

function clickArrows () {
    getArrayNext();
    ourFriendsCards.classList.add('carousel');
    setTimeout(function() {
        petOne.src = pathOfPets(arrNext[0]);
        petTwo.src = pathOfPets(arrNext[1]);
        petThree.src = pathOfPets(arrNext[2]);
        namePetOne.textContent = petName[arrNext[0]];
        namePetTwo.textContent = petName[arrNext[1]];
        namePetThree.textContent = petName[arrNext[2]];
        ourFriendsCards.classList.remove('carousel');
    }, 700)    
};

clickArrows();


/*.........................................................json.................................................*/
let popupImage = document.querySelector('.popup_image');
let popupBlockText = document.querySelector('.popup_block_text');
let popupName = document.querySelector('.popup_name');
let popupType = document.querySelector('.popup_type');
let popupDescription = document.querySelector('.popup_description');
let popupList = document.querySelector('.popup_list');
let popupListAge = document.querySelector('.popup_list_age');
let popupListInoculations = document.querySelector('.popup_list_inoculations');
let popupListDiseases = document.querySelector('.popup_list_diseases');
let popupListParasites = document.querySelector('.popup_list_parasites');
let popupSpan1 = document.querySelector('.popup_span1');
let popupSpan2 = document.querySelector('.popup_span2');
let popupSpan3 = document.querySelector('.popup_span3');
let popupSpan4 = document.querySelector('.popup_span4');
let popupSpanAge = document.querySelector('.popup_span_age');
let popupSpanInoculations = document.querySelector('.popup_span_inoculations');
let popupSpanDiseases = document.querySelector('.popup_span_diseases');
let popupSpanParasites = document.querySelector('.popup_span_parasites');

var requestURL = '../../assets/pets.json';
var request = new XMLHttpRequest();
var myPets;

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    myPets = request.response;
    showCurrentCard();
};

/*.........................................................попап.................................................*/

let card = document.querySelectorAll('.card');
let cardsPopup = document.querySelector('.our_friends_cards_popup');
let popupContent = document.querySelector('.our_friends_cards_popup_content');
let popup = document.querySelector('.popup');

function showCurrentCard() {
    for(let i = 0; i < card.length; i++) {
        card[i].addEventListener('click', function() {
            body.classList.add('overflow_hidden');
            popup.style.display = 'flex';
            cardsPopup.style.display = 'flex';
            popupImage.style.backgroundImage = `url(${myPets[arrNext[i]].img})`;
            popupName.textContent = myPets[arrNext[i]].name;
            popupType.textContent = myPets[arrNext[i]].type + ' - ' + myPets[arrNext[i]].breed;
            popupDescription.textContent = myPets[arrNext[i]].description;
            popupSpanAge.textContent = myPets[arrNext[i]].age;
            popupSpanInoculations.textContent = myPets[arrNext[i]].inoculations.join(', ');
            popupSpanDiseases.textContent = myPets[arrNext[i]].diseases.join(', ');
            popupSpanParasites.textContent = myPets[arrNext[i]].parasites.join(', ');
        });
    }
};

popup.addEventListener('click', function(e) {
    if(e.target === popupContent || e.target === popupImage || e.target === popupBlockText || e.target === popupName || e.target === popupType || e.target === popupDescription || e.target === popupList
        || e.target === popupListAge || e.target === popupListInoculations || e.target === popupListDiseases || e.target === popupListParasites || e.target === popupSpan1 || e.target === popupSpan2
        || e.target === popupSpan3 || e.target === popupSpan4 || e.target === popupSpanAge) {
        e.preventDefault();
    }
    else {
        body.classList.remove('overflow_hidden');
        popup.style.display = 'none';
        cardsPopup.style.display = 'none';
    }
});

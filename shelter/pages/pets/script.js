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
}

/*.........................................................пагинация.................................................*/

let cardImg = document.querySelectorAll('.card_img');
let cardTitle = document.querySelectorAll('.card_title');
let petName = ['Jennifer', 'Sophia', 'Woody', 'Scarlett', 'Katrine', 'Timmy', 'Freddie', 'Charly'];
let buttonOne = document.querySelector('.pets_button_one');
let buttonTwo = document.querySelector('.pets_button_two');
let buttonThree = document.querySelector('.pets_button_three');
let buttonFour = document.querySelector('.pets_button_four');
let buttonFive = document.querySelector('.pets_button_five');


function clickButtons() {
    buttonOne.addEventListener('click', function() {
        if(Number(buttonThree.textContent) > 1) {
            buttonThree.textContent = '1';
            showCard();
            buttonOne.classList.remove('pets_button_active');
            buttonOne.style.backgroundImage = 'url(../../assets/img/dabblleft.png)';
            buttonTwo.classList.remove('pets_button_active');
            buttonTwo.style.backgroundImage = 'url(../../assets/img/left.png)';
            buttonFour.classList.add('pets_button_active');
            buttonFour.style.backgroundImage = 'url(../../assets/img/right.png)';
            buttonFive.classList.add('pets_button_active');
            buttonFive.style.backgroundImage = 'url(../../assets/img/dabblright.png)';
        }
    });
    
    buttonTwo.addEventListener('click', function() {
        if(Number(buttonThree.textContent) > 2) {
                buttonThree.textContent = Number(buttonThree.textContent) - 1;
                showCard();
                buttonFour.classList.add('pets_button_active');
                buttonFour.style.backgroundImage = 'url(../../assets/img/right.png)';
                buttonFive.classList.add('pets_button_active');
                buttonFive.style.backgroundImage = 'url(../../assets/img/dabblright.png)'; 
        }
        else {
            buttonOne.click(); 
        }
    });
    
    buttonFour.addEventListener('click', function() {
        if (document.body.clientWidth >= 1280) {
            if(Number(buttonThree.textContent) < 5) {
                buttonThree.textContent = Number(buttonThree.textContent) + 1;
                showCard();
                buttonOne.classList.add('pets_button_active');
                buttonOne.style.backgroundImage = 'url(../../assets/img/dabblleft2.png)';
                buttonTwo.classList.add('pets_button_active');
                buttonTwo.style.backgroundImage = 'url(../../assets/img/left2.png)';
            }
            else {
                buttonFive.click(); 
            }
        }
        else if (document.body.clientWidth < 1280 && document.body.clientWidth >= 768) {
            if(Number(buttonThree.textContent) < 7) {
                buttonThree.textContent = Number(buttonThree.textContent) + 1;
                showCard();
                buttonOne.classList.add('pets_button_active');
                buttonOne.style.backgroundImage = 'url(../../assets/img/dabblleft2.png)';
                buttonTwo.classList.add('pets_button_active');
                buttonTwo.style.backgroundImage = 'url(../../assets/img/left2.png)';
            }
            else {
                buttonFive.click(); 
            }
        }
        else if (document.body.clientWidth < 768) {
            if(Number(buttonThree.textContent) < 15) {
                buttonThree.textContent = Number(buttonThree.textContent) + 1;
                showCard();
                buttonOne.classList.add('pets_button_active');
                buttonOne.style.backgroundImage = 'url(../../assets/img/dabblleft2.png)';
                buttonTwo.classList.add('pets_button_active');
                buttonTwo.style.backgroundImage = 'url(../../assets/img/left2.png)';
            }
            else {
                buttonFive.click(); 
            }
        }  
    });
    
    buttonFive.addEventListener('click', function() {
        if(document.body.clientWidth >= 1280) {
            if(Number(buttonThree.textContent) < 6) {
                if (document.body.clientWidth >= 1280) {
                    buttonThree.textContent = '6';  
                }
                else if (document.body.clientWidth < 1280 && document.body.clientWidth >= 768) {
                    buttonThree.textContent = '8'; 
                }
                else if (document.body.clientWidth < 768) {
                    buttonThree.textContent = '16'; 
                }
                showCard();
                buttonOne.classList.add('pets_button_active');
                buttonOne.style.backgroundImage = 'url(../../assets/img/dabblleft2.png)';
                buttonTwo.classList.add('pets_button_active');
                buttonTwo.style.backgroundImage = 'url(../../assets/img/left2.png)';
                buttonFour.classList.remove('pets_button_active');
                buttonFour.style.backgroundImage = 'url(../../assets/img/right2.png)';
                buttonFive.classList.remove('pets_button_active');
                buttonFive.style.backgroundImage = 'url(../../assets/img/dabblright2.png)';
            }
        }
        else if(document.body.clientWidth < 1280 && document.body.clientWidth >= 768) {
            if(Number(buttonThree.textContent) < 8) {
                if (document.body.clientWidth >= 1280) {
                    buttonThree.textContent = '6';  
                }
                else if (document.body.clientWidth < 1280 && document.body.clientWidth >= 768) {
                    buttonThree.textContent = '8'; 
                }
                else if (document.body.clientWidth < 768) {
                    buttonThree.textContent = '16'; 
                }
                showCard();
                buttonOne.classList.add('pets_button_active');
                buttonOne.style.backgroundImage = 'url(../../assets/img/dabblleft2.png)';
                buttonTwo.classList.add('pets_button_active');
                buttonTwo.style.backgroundImage = 'url(../../assets/img/left2.png)';
                buttonFour.classList.remove('pets_button_active');
                buttonFour.style.backgroundImage = 'url(../../assets/img/right2.png)';
                buttonFive.classList.remove('pets_button_active');
                buttonFive.style.backgroundImage = 'url(../../assets/img/dabblright2.png)';
            }
        }
        else if(document.body.clientWidth < 768) {
            if(Number(buttonThree.textContent) < 16) {
                if (document.body.clientWidth >= 1280) {
                    buttonThree.textContent = '6';  
                }
                else if (document.body.clientWidth < 1280 && document.body.clientWidth >= 768) {
                    buttonThree.textContent = '8'; 
                }
                else if (document.body.clientWidth < 768) {
                    buttonThree.textContent = '16'; 
                }
                showCard();
                buttonOne.classList.add('pets_button_active');
                buttonOne.style.backgroundImage = 'url(../../assets/img/dabblleft2.png)';
                buttonTwo.classList.add('pets_button_active');
                buttonTwo.style.backgroundImage = 'url(../../assets/img/left2.png)';
                buttonFour.classList.remove('pets_button_active');
                buttonFour.style.backgroundImage = 'url(../../assets/img/right2.png)';
                buttonFive.classList.remove('pets_button_active');
                buttonFive.style.backgroundImage = 'url(../../assets/img/dabblright2.png)';
            }
        }
        
    });
};

let arrCards1280 = [
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5, 6, 7]
];

let arrCards768 = [
    [1, 2, 3, 7, 6, 5],
    [1, 2, 3, 7, 6, 5],
    [1, 2, 0, 4, 6, 5],
    [1, 2, 0, 4, 7, 5],
    [1, 0, 3, 4, 7, 5],
    [1, 0, 3, 4, 6, 5],
    [0, 2, 3, 4, 6, 7],
    [0, 2, 3, 4, 6, 7]
];

let arrCards320 = [
    [0, 3, 1],
    [1, 2, 4],
    [5, 3, 6],
    [2, 6, 7],
    [4, 0, 2],
    [7, 3, 6],
    [5, 7, 1],
    [0, 4, 5],
    [7, 2, 3],
    [1, 5, 7],
    [2, 4, 0],
    [4, 6, 5],
    [3, 2, 1],
    [0, 4, 7],
    [1, 6, 3],
    [5, 6, 0]
];

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function randomCard1280() {
    shuffle(arrCards1280[0]);
    shuffle(arrCards1280[1]);
    shuffle(arrCards1280[2]);
    shuffle(arrCards1280[3]);
    shuffle(arrCards1280[4]);
    shuffle(arrCards1280[5]);
};

function randomCard768() {
    shuffle(arrCards768);
    shuffle(arrCards768[0]);
    shuffle(arrCards768[1]);
    shuffle(arrCards768[2]);
    shuffle(arrCards768[3]);
    shuffle(arrCards768[4]);
    shuffle(arrCards768[5]);
    shuffle(arrCards768[6]);
    shuffle(arrCards768[7]);
};

function randomCard320() {
    shuffle(arrCards320);
    shuffle(arrCards320[0]);
    shuffle(arrCards320[1]);
    shuffle(arrCards320[2]);
    shuffle(arrCards320[3]);
    shuffle(arrCards320[4]);
    shuffle(arrCards320[5]);
    shuffle(arrCards320[6]);
    shuffle(arrCards320[7]);
    shuffle(arrCards320[8]);
    shuffle(arrCards320[9]);
    shuffle(arrCards320[10]);
    shuffle(arrCards320[11]);
    shuffle(arrCards320[12]);
    shuffle(arrCards320[13]);
    shuffle(arrCards320[14]);
    shuffle(arrCards320[15]);
};

randomCard1280();
randomCard768();
randomCard320();

function showCard() {
    if (document.body.clientWidth >= 1280) {
        for (let i = 0; i < 8; i++) {
            cardTitle[i].textContent = myPets[arrCards1280[Number(buttonThree.textContent) - 1][i]].name;
            cardImg[i].src = myPets[arrCards1280[Number(buttonThree.textContent) - 1][i]].img;
        };
    }
    else if (document.body.clientWidth < 1280 && document.body.clientWidth >= 768) {
        for (let i = 0; i < 6; i++) {
            cardTitle[i].textContent = myPets[arrCards768[Number(buttonThree.textContent) - 1][i]].name;
            cardImg[i].src = myPets[arrCards768[Number(buttonThree.textContent) - 1][i]].img;
        }
    }
    else if (document.body.clientWidth < 768) {
        for (let i = 0; i < 3; i++) {
            cardTitle[i].textContent = myPets[arrCards320[Number(buttonThree.textContent) - 1][i]].name;
            cardImg[i].src = myPets[arrCards320[Number(buttonThree.textContent) - 1][i]].img;
        }
    }
}



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
    showCard();
    showCurrentCard();
    clickButtons();
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
            if (document.body.clientWidth >= 1280) {
                popupImage.style.backgroundImage = `url(${myPets[arrCards1280[Number(buttonThree.textContent) - 1][i]].img})`;
                popupName.textContent = myPets[arrCards1280[Number(buttonThree.textContent) - 1][i]].name;
                popupType.textContent = myPets[arrCards1280[Number(buttonThree.textContent) - 1][i]].type + ' - ' + myPets[arrCards1280[Number(buttonThree.textContent) - 1][i]].breed;
                popupDescription.textContent = myPets[arrCards1280[Number(buttonThree.textContent) - 1][i]].description;
                popupSpanAge.textContent = myPets[arrCards1280[Number(buttonThree.textContent) - 1][i]].age;
                popupSpanInoculations.textContent = myPets[arrCards1280[Number(buttonThree.textContent) - 1][i]].inoculations.join(', ');
                popupSpanDiseases.textContent = myPets[arrCards1280[Number(buttonThree.textContent) - 1][i]].diseases.join(', ');
                popupSpanParasites.textContent = myPets[arrCards1280[Number(buttonThree.textContent) - 1][i]].parasites.join(', ');
            }
            else if (document.body.clientWidth < 1280 && document.body.clientWidth >= 768) {
                popupImage.style.backgroundImage = `url(${myPets[arrCards768[Number(buttonThree.textContent) - 1][i]].img})`;
                popupName.textContent = myPets[arrCards768[Number(buttonThree.textContent) - 1][i]].name;
                popupType.textContent = myPets[arrCards768[Number(buttonThree.textContent) - 1][i]].type + ' - ' + myPets[arrCards768[Number(buttonThree.textContent) - 1][i]].breed;
                popupDescription.textContent = myPets[arrCards768[Number(buttonThree.textContent) - 1][i]].description;
                popupSpanAge.textContent = myPets[arrCards768[Number(buttonThree.textContent) - 1][i]].age;
                popupSpanInoculations.textContent = myPets[arrCards768[Number(buttonThree.textContent) - 1][i]].inoculations.join(', ');
                popupSpanDiseases.textContent = myPets[arrCards768[Number(buttonThree.textContent) - 1][i]].diseases.join(', ');
                popupSpanParasites.textContent = myPets[arrCards768[Number(buttonThree.textContent) - 1][i]].parasites.join(', ');
            }
            else if (document.body.clientWidth < 768) {
                popupImage.style.backgroundImage = `url(${myPets[arrCards320[Number(buttonThree.textContent) - 1][i]].img})`;
                popupName.textContent = myPets[arrCards320[Number(buttonThree.textContent) - 1][i]].name;
                popupType.textContent = myPets[arrCards320[Number(buttonThree.textContent) - 1][i]].type + ' - ' + myPets[arrCards320[Number(buttonThree.textContent) - 1][i]].breed;
                popupDescription.textContent = myPets[arrCards320[Number(buttonThree.textContent) - 1][i]].description;
                popupSpanAge.textContent = myPets[arrCards320[Number(buttonThree.textContent) - 1][i]].age;
                popupSpanInoculations.textContent = myPets[arrCards320[Number(buttonThree.textContent) - 1][i]].inoculations.join(', ');
                popupSpanDiseases.textContent = myPets[arrCards320[Number(buttonThree.textContent) - 1][i]].diseases.join(', ');
                popupSpanParasites.textContent = myPets[arrCards320[Number(buttonThree.textContent) - 1][i]].parasites.join(', ');
            }
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

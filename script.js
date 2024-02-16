'use strict';

const btn = document.querySelector('#refresh-button');

async function fetchDog() {
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await res.json();
    return data;
    // console.log(data);
}


// nbdchbchdc


btn.addEventListener('click', async function() {
    const dogImage = await fetchDog();
    console.log(dogImage.message)

    document.querySelector('#dog-image').src = dogImage.message

})
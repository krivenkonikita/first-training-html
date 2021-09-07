let numberOfClicks = 0;

function countNumberOfClicks() {
    console.log('numberOfClicks', numberOfClicks)
    numberOfClicks = numberOfClicks + 1;
    document.querySelector('.clicks-number').innerHTML = numberOfClicks;
}


document.querySelector('.click-button').addEventListener('click', countNumberOfClicks)


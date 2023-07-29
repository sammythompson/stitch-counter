document.addEventListener('DOMContentLoaded', () => {

    const decreaseBtn = document.querySelector('.decrease-btn');
    // const resetBtn = document.querySelector('.reset-btn');
    const increaseBtn = document.querySelector('.increase-btn');
    const saveBtn = document.querySelector('.save-btn');
    let numCounter = document.querySelector('.counter');
    const savedNums = document.querySelector('.saved-nums');
    const incrementList = document.querySelector('.increment-list');
    const incrementBtns = incrementList.querySelectorAll('.increment-btns button');

    let counter = 0;
    let increment = 1;
    console.log(incrementBtns);
    incrementBtns.forEach(function(el) {
        el.addEventListener('click', function(){
           increment = parseInt(el.dataset.increment);
        })
    })

    //Every click will add 1 to the counter
    increaseBtn.addEventListener('click', function(){
        numCounter.innerHTML = counter += increment;
    })
    
    //Every click will minus a number to the counter
    // We don't want it to go past zero so even when incremenet is more than one don't let it go past 0
    decreaseBtn.addEventListener('click', function(){
        if (counter > 0 && counter - increment < 0) {
            numCounter.innerHTML = 0;
        } else if (counter > 0) {
            numCounter.innerHTML = counter -= increment;
        }
    })

    //This btn will reset the count to 0 
    // resetBtn.addEventListener('click', function(){
    //     counter = 0;
    //     numCounter.innerHTML = counter;

    // })

    //Save btn will log the counts. 
    saveBtn.addEventListener('click', function(){
        const numValue = counter;
        const savedRow = document.createElement('div');
        savedRow.classList.add('saved-row');
        savedRow.innerHTML = numValue;
        savedNums.appendChild(savedRow);
    })
 

});
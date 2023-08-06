document.addEventListener('DOMContentLoaded', () => {

    const decreaseBtn = document.querySelector('.decrease-btn');
    // const resetBtn = document.querySelector('.reset-btn');
    const increaseBtn = document.querySelector('.increase-btn');
    const saveBtn = document.querySelector('.save-btn');
    let numCounter = document.querySelector('.counter');
    const savedNums = document.querySelector('.saved-nums');
    const incrementList = document.querySelector('.increment-list');
    const incrementBtns = incrementList.querySelectorAll('.increment-btns button');

    const newRowBtn = document.querySelector('.new-row-btn');
    const getActiveRow = function() {
        return document.querySelector(`tr[data-row-index="${activeIndex}"]`);
    }
    const activateRow = function() {
        activeIndex = parseInt(this.dataset.rowIndex);
        numCounter.innerHTML = stitchesByRow[activeIndex];
    }


    let increment = 1;
    const stitchesByRow = [0];
    let activeIndex = 0;

    // init first row event listener

    getActiveRow().addEventListener("click", activateRow);

    newRowBtn.addEventListener('click', function() {
        // push new row with stiches value at 0
        stitchesByRow.push(0);
        // set active index to new row
        activeIndex = stitchesByRow.length - 1;
        numCounter.innerHTML = stitchesByRow[activeIndex];
        // var tbodyRef = document.querySelector('myTable').getElementsByTagName('tbody')[0];
        // Insert a row at the end of table
        // select table body
        const tBodyEl = document.querySelector('.table-body-el');
        // create 
        // const newTableRow = tBodyEl.insertRow();
        // const newCell = newTableRow.insertCell();
        // const newText = document.createTextNode('new row');
        const newRowTableRow = `
            <tr class="table-row-numbers" data-row-index="${activeIndex}">
                <td class="column-index">${activeIndex + 1}</td>
                <td class="column-stitches">0</td>
            </tr>`;
            
        tBodyEl.insertAdjacentHTML("beforeend", newRowTableRow);
        const activeRow = getActiveRow();
        activeRow.addEventListener('click', activateRow);
        // newCell.appendChild(newText);
        
    })
    


    // create a new row button in html -done
    // add an event listener to button that -done
        // pushes a new number to the end of the array. What should that number start as? 0
        // sets the active number to the new row
        // adds a new element to the row table (we haven't built the table yet so don't need this until we do.)

    // multiple rows
        // each row has a counter and a row id number

    // Arrays which are a way to create a list of items in a particular order
    // Objects are a way to save unordered information and look up by a keyname

    // const list = [1,3,4,5,6,7,8,6];

    

    // const list2 = {
    //     default2: {"increment":1,"stitches":[0]},
    //     default: {"increment":1,"stitches":[0,0,7]},
    // }

    // list2['default2']

    // for(let i = 0; i < list.length; i++) {
    //     if(list[i] === '6') {
            
    //     }
    // }


    incrementBtns.forEach(function(el) {
        // use data attr to know what number we are updateing the increment to. 
        // attr is a string so we use parseInt to convert it to a number
        el.addEventListener('click', function(){
           increment = parseInt(el.dataset.increment);
        })
    })

    const getActiveColumnStitches = function() {
        return document.querySelector(`tr[data-row-index="${activeIndex}"] .column-stitches`);
    }

    //Every click will add 1 to the counter
    increaseBtn.addEventListener('click', function(){
        const columnStiches = getActiveColumnStitches();
        numCounter.innerHTML = stitchesByRow[activeIndex] += increment;
        columnStiches.innerHTML = numCounter.innerHTML;
    })
    
    //Every click will minus a number to the counter
    // We don't want it to go past zero so even when incremenet is more than one don't let it go past 0
    // Ok so that means that if the number minus increment is less than 0 and the number is greater than 0 set to zero

    decreaseBtn.addEventListener('click', function(){
        const columnStiches = getActiveColumnStitches();
        if (stitchesByRow[activeIndex] > 0 && stitchesByRow[activeIndex] - increment < 0) {
            numCounter.innerHTML = 0;
            
        } else if (stitchesByRow[activeIndex] > 0) {
            numCounter.innerHTML = stitchesByRow[activeIndex] -= increment;
        }
        columnStiches.innerHTML = numCounter.innerHTML;

    })

    //This btn will reset the count to 0 
    // resetBtn.addEventListener('click', function(){
    //     counter = 0;
    //     numCounter.innerHTML = counter;

    // })



    //Save btn will log the counts. 
    // saveBtn.addEventListener('click', function(){
    //     const numValue = counter;
    //     const savedRow = document.createElement('div');
    //     savedRow.classList.add('saved-row');
    //     savedRow.innerHTML = numValue;
    //     savedNums.appendChild(savedRow);
    // })




    // var tbodyRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];
    

    // // Insert a row at the end of table
    // var newRow = tbodyRef.insertRow();

    // // Insert a cell at the end of the row
    // var newCell = newRow.insertCell();

    // // Append a text node to the cell
    // var newText = document.createTextNode('new row');
    // newCell.appendChild(newText);
 

});


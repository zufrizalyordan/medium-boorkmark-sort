// Author: Zufrizal Yordan <zufrizalyordan@gmail.com>
// License: The Unlicense
var blockList = document.getElementsByClassName('blockGroup--list');
var itemList = document.getElementsByClassName('block--list');
var itemTime = '';
var tmpArr = [];
var newList = [];
var readingTimeText = '';

// loop through the block
[].forEach.call(itemList, function (el, idx, arr) {
 // get reading time
    itemTime = el.getElementsByClassName('readingTime');
    readingTimeText = itemTime[0].textContent;

    // need to parse certain text : 1 of 6 min read
    if(readingTimeText.split(' ')[1] === 'of'){
        readintTimeVal = readingTimeText.split(' ')[2];
    }else{
        readingTimeVal = readingTimeText.split(' ')[0];
    }

    if(readingTimeVal.length) {
         // put reading time and current index in arrayItems
        tmpArr.push([idx, parseInt(readingTimeVal)]);
    }
});

// sort arrayItems by reading time
tmpArr.sort(function(a, b){return parseInt(b[1]) - parseInt(a[1])});

// reorder current blocks according to index
[].forEach.call(tmpArr, function (el, idx, arr) {
    newList.push(itemList[el[0]]);
});

blockList[0].innerHTML = '';

var item = '';
[].forEach.call(newList, function(el, idx, arr){
    blockList[0].insertBefore(el, blockList[0].firstChild);
});
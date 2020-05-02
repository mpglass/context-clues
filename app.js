//Global scope
// function makeAccuse() {
//     var accusation = print2page();
//     return function () {
//         var print2page = $('<h3 class=h>"Accusation 1"</h3>');
//         return print2page;

//     };
// }

// var test = makeAccuse();
// $('#accusations').append(test());

// var counter = (function(){
//     var variableCounter = 0;
//     function changeBy(val) {
//         variableCounter+= val; 
//     }
//     return {
//         increment: function() {
//             changeBy(1);
//         },
//     value: function() {
//         return variableCounter;
//     }
//     };
// })();

// console.log(counter.value()); 
// counter.increment(); 
// console.log(counter.value());

for (var i = 0; i < 10; i++) {
    createH3(i);
}

function createH3(accNum) {
    var createH3 = $('<h3 class="accH3">Accusation ' + accNum + '</h3>');
     $('#accusations').append(createH3);
     createH3.click(function(){
         alert(accNum + ' was clicked')
     })
}















// var friend = ['Mark', 'Steven', 'Selene', 'Rayne', 'Pheften']
// var where = ['Dinning Room', 'Co-ed Bathroom', 'Office',
//     'Kitchen', 'Garden Maze', 'Personal Starbucks location', 'Library',
//     'The West Wing', 'The Game Room', 'The Indoor Lazy River']
// var weapon = ['spork', 'paper plate', 'soap-a-rope', 'plunger',
//     'Audrey 2', 'angry corgi', 'Swingline stapler', 'coffee pot',
//     'knife', 'salad shooter', 'plastic straw', 'frother', 'enchanted rose',
//     'the beast', 'loaded dice', 'nerf sword', 'aligator float', 'piranah',
//     'the Necronomicron', 'boom-stick']
// function getRandom(array) {
//     return array[Math.floor(Math.random() * array.length)];
// }

// for (var i = 0; i < 10; i++) {
//     var accNum = i + 1;
//     var accH3 = $('<h3 class="accH3">Accusation ' + accNum + '</h3>');
//     $('#accusations').append(accH3);
// $('.accH3[i]').click(function () {
//     // alert('I accuse ' + getRandom(friend) + ', with the ' + getRandom(weapon) + ' in the ' + getRandom(where) + '.')
// console.log('click')
// })
// };

// function clicked (){
//     console.log(alert)

//     //first inner scope
//     for (let i = 0; i < 10; i++) {
//         var accNum = i + 1;
//         var accH3 = $('<h3 class="accH3">Accusation ' + accNum + '</h3>');
//         $('#accusations').append(accH3);
//     accH3.click(function alert() {
//     alert('this link was clicked')
//     });   
// }
// }
//console.log(i);






//Clicking on an h3 element should display an alert that says a statement in the following format:
//Accusation i: I accuse FRIEND_NAME, with the WEAPON_NAME in the LOCATION_NAME!
//need one loop to run lab
//You will use the value of i in the loop to determine which of the above array items to use

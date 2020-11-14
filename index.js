// // Code your solutions in this file

function writeCards(name, event){
    let new_array = [];
    for (let i = 0; i < name.length; i++){
        new_array.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return new_array;
}

function countDown(number){
    while (number >= 0){
        console.log(number--);
    }
}
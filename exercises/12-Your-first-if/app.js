var total = prompt('How many km are left to go?');

// Your code below:

function result() {

    let result;
    if (parseInt(total) > 100) {
      result = 'We still have a bit of driving left to go';
    } else {
        if (parseInt(total) > 50) {
            result = "We'll be there in 5 minutes";
          } else {
            if (parseInt(total) <= 50) {
                result = "I'm parking. I'll see you right now";
              } else 
            result = 'NOT positive';
          }
      
    }
    return result;


}
console.log (result());
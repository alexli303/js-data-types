/**
 * Arrays
 * Most of your answers should be stored in variables called q1, q2 etc.. and the variables printed to the console.

    (i.e) console.log("Question 1" + q1)
 */

/**
 * Question 1
 * Create an array of image sources. Use image1.png, image2.png, and image3.png as the array values.
 */

// Your code here
var image = ["image1.png","image2.png","image3.png"];
image;
/**
 * Question 2
 * Using the array from Question 1, store the first element of the array in variable q2.
 */

// Your code here

var q2 = image[0];

/**
 * Question 3
 * Get the length of the first array (number of elements in the array) and store it in variable q3
 */

// Your code here
var q3 = image.length;

/**
 * Question 4
 *  Using the array from Question 1, store the last element of the array in variable q4. Hint: How can we get the number of elements in the array?
 */


// Your code here
var q4 = image[image.length-1];


// ____________________________________________________________________________

/**
 * Arrays + Iteration
 * Most of your answers should be stored in variables called q1, q2 etc.. and the variables printed to the console.

    (i.e) console.log("Question 1" + q1)
 */

/**
 * Question 1
 * Create an array of numbers using 1,2,3, and 4 as values. Use forEach to increase each value by 1 and store the value back in the array.
The end result should be an array of numbers with values 2,3,4,5
 */

// Your code here
q1 = [1,2,3,4];
q1.forEach(function(element,index){
    q1[index]=++element;
});


/**
 * Question 2
 * Using the array from Question 1, find the average of the numbers in the array (average=sum of all numbers/number of numbers). Store the average in q2.
 */
q5 = [1,2,3,4];
q5.forEach(function(element,index){
    var total += element
    return total/q5.length
});

q2 = 0;
q1.forEach(function(element,index){
    q2+=element;
});
q2=q2/q1.length;

// Your code here

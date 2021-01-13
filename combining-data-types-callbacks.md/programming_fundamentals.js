// ======================== Common programming principles ======================== //

// Write a ~1 sentence summary for each one

// DRY :
    //Don't repeat yourself and eliminate redundancies to make your code more efficient

// KISS:
    //Keep it simple stupid - don't overcomplicate code making it difficult to read or write

// Avoid creating a YAGNI:
    //Don't create code until you need it (You aren’t going to need it)

// Do the simplest thing that could possibly work:
    //Try to find the most simplified way to write your code

// Don't make me think:
    //Code should be easy for other developers to read and understand quickly

// Write code for the maintainer:
    //Make your code easy to maintain by someone else - write it as if it's not for you

// Single responsibility principle:
    //Each component should perform one specific well defined task

// Avoid premature optimization:
    //Focus on making the code work and then simplify afterwards

// Separation of concerns:
    //Functionality should be managed by distinct code blocks w/ minimal overlapping



// Which ones surprise you (if any)?
    // I was most suprised by premature optimization because I assumed it'd be harder to optimize code once it's already

// Which one is currently giving you the most struggle?
    //I'm still struggling with KISS because I'm still learning how to simplify my code so that I understand how it's working

// =============================== Commenting Code =============================== //

    // create a function that takes a parameter l (number)
const f = l => {
    // define each variable and assign it to a number
    let es = 0, p = 0, c = 1, n = 0
    // create a loop to iterate through equations while the variable is less than the parameter
    while (c <= l) {
      // set variable n to be the sum of variable c and variable p
      n = c + p
      //p variable = c variable &&&& c variable = n variable
      [c, p] = [n, c]
      // if c is even, return c and add it to variable es and loop again
      // else return 0 and loop again
      es += (c % 2 === 0) ? c : 0;
    }
    // return the total of es after completing the loop
    return es
  }

  //run function f with parameter set to 55 and console.log the es variable (sum)

  console.log(f(55))


// // In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - are there any other variable names or things that would make this code easier to read and understand?

//   Answer: Fibonnacci sequence; You could also use words like 'sum' or 'first number' for some of the variables to make it more clear

// //If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2?

//     Answer: I would want to start working with f2 and quickly eliminate all of the odd or even numbers since the parameter would simplify the code and reduce the amount of code/steps to get the result

// // Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?

//   Answer: No

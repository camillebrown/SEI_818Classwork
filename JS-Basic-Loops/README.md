# JS-Basic-Loops

This lab was altered from the source material [here](https://git.generalassemb.ly/wdi-wc-march2018/Homework/tree/master/Week_One/Wednesday/Arrays-Loops-Conditionals).

## Prereqs:
* Loops
* Conditionals

## Directions

Complete these problems on your local machine. When you think you have the answer to one of the problems run it locally with the `node` command. For example:

```
node getEven.js
```

## Get Even

1. Write a for loop that will log only the even numbers in 0 through 200.
>Hint: Think about the increment expression.

<hr>

## Excited Kitten

1. Write code that logs "Love me, pet me! HSSSSSS!" 10 times.

2. For every **even** number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", "meow?", or "...why does the red dot always get away..." at random.

>Hint: You will need to use Math.random()

<hr>

## Thermostat

1. Declare a variable called `currentTemp` that stores the current temperature. Set this to a random whole number between 1 and 100. 

> Hint: Use `Math.random` then multiply by 100 - make sure to use `floor` or `rnd` to get a whole number

2. Declare a variable called `desiredTemp` that is the temperature in Fahrenheit, that you personally like to relax at. (For most of us, this is between 68 and 72!)

3. Print out the current temperature is. For example:

```
The current temperature is 24F
```

4. While the temperature is too low, add a degree to the current temperature. Every time you increase the temperature, print out the current temperature again. For example:

```
The current temperature is now 25F
```

5. While the temperature is too high, subtract a degree from the current temperature. Every time you decrease the temperature, print out the current temperature again.

<hr>

## Fizz Buzz

1. Write a javascript application that logs all numbers from 1 - 100.

2. If a number is divisible by 3 log "Fizz" instead of the number.

3. If a number is divisible by 5 log "Buzz" instead of the number.

4. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

## BONUS: What's My Number?

Have you learned about JavaScript objects yet? If you've got some bonus time, there's no time like the present!

Use a for...in loop to examine the phoneBook Object below and print out the names of all the people who share the phone number "333-333-3333".

```
var phoneBook = {
  "Abe": "111-111-1111",
  "Bob": "222-222-2222",
  "Cam": "333-333-3333",
  "Dan": "444-444-4444",
  "Ern": "555-555-5555",
  "Fry": "111-111-1111",
  "Gil": "222-222-2222",
  "Hal": "333-333-3333",
  "Ike": "444-444-4444",
  "Jim": "555-555-5555",
  "Kip": "111-111-1111",
  "Liv": "222-222-2222",
  "Mia": "333-333-3333",
  "Nik": "444-444-4444",
  "Oli": "555-555-5555",
  "Pam": "111-111-1111",
  "Qiq": "222-222-2222",
  "Rob": "333-333-3333",
  "Stu": "444-444-4444",
  "Tad": "555-555-5555",
  "Uwe": "111-111-1111",
  "Val": "222-222-2222",
  "Wil": "333-333-3333",
  "Xiu": "444-444-4444",
  "Yam": "555-555-5555",
  "Zed": "111-111-1111"
}
```

## Nice Job!

![cat](https://media.giphy.com/media/3jiLBDyAIZnrd8BwTm/giphy.gif)

# Waffle Browser Program

---

## Prereqs
* javascript, alerts, prompts

## Setup
* fork and clone this repository
* create a `pseudocode.txt` file in the root of this directory

## Part 1: Psuedo Code

* Pseudo code the process for making waffles (the frozen kind) with syrup in your `pseudocode.txt` file.
* Start simply with broad commands (put syrup on the waffles)
* As time permits, make each broad command more specific (pull syrup from refrigerator, warm the syrup before you use it, open the lid on the syrup, pour the syrup on top of waffle).
* Once you've done that, take the time to think this over as if you were writing it as an application. Comment each step and determine which kind of code it would be out of the following options:

    - Assertions
        - This is a statement that is expected to be true (Boolean-valued function, i.e. a true–false expression), or in this instance, what we want to get to a true point ("Take the waffles from the freezer" would be an assertion after we confirmed that we had waffles in the freezer that we could remove).
    - Conditionals
        - A question is asked.  This tells us a conditional is coming
        - Looks for words like "if, unless, otherwise"
        - Think of all the possible outcomes of the situation
            - Each outcome represents an `if`, `else if`, or `else` statement
    - Loops
        - Something is done multiple times
        - Look for words like "while, as long as, until"
    - Functions
        - We've oversimplified a step which could be broken out into multiple steps.

* Identify data types
    - whenever you have a conditional, loop, or something you're keeping track of, identify its type
        - text (strings)
        - numbers (ints/floats)
        - true/false values (booleans)
        - collections of stuff (arrays)

## Part 2: Turn your pseudocode into javascript!

* we have given you some starter html/css
* add a `script` tag to the html to hook up your `waffle.js` with the html
* Note that the starter HTML has an `onClick` event attached to the start button. Check out `waffle.js` to see what is currently in the `start` function. Make sure you can get that `console.log` showing in your browser console by clicking the button.
* Write a program that implements your pseudocoded waffles with syrup process into your `waffle.js`.

Check out [this example](https://brunno-dasilva.github.io/waffle-lab-SEIR/index.html) by our very own Bruno, for reference!

## Hungry for More?
* Write another interactive application in your browser for running a lemonade stand.

--- 

Adapted from [SEI-MAE](https://git.generalassemb.ly/Software-Engineering-Immersive-Remote/SEIR-MAE-INSTRUCTORS/blob/master/unit_1/w03d1/student_labs/waffle_lab.md)

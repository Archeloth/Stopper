# Stopper
This is my little JavaScript project to build a stopwatch with a 7 segment display. You can start and reset the timer with the button. Currently only with second and minute indicator, but that can be tweaked very easily.
The live demo could be viewed at https://archeloth.github.io/Stopper/.

## Project layout
It contains a simple index page, that got styled with a CSS stylesheet, and a .js file that contains all the necessary scripts.

### HTML
In the index page, the main skeleton or the whole clock is a div, called `clock-body`, and within there are 4 separate displays, for each number, and a collon. Each number has 7 segments within them, all made out of `div`s and got their classes are just short terms for their representative positions:
* `stt` "segment top top"
* `stl` "segment top left"
* `str` "segment top right"
* `sm` "segment middle"
* `sbl` "segment bottom left"
* `sbr` "segment bottom right"
* `sbb` "segment bottom bottom"

### CSS
The stylesheet is relatively simple, with the body's elements ordered in a `flex-direction: column;`, so each child element gets positioned vertically under each other. The clock itself is relatively responsive, since I used viewport units, and within there is another flex order, but in a `flex-direction: row;` direction. And thats the simple layout. Then each number gets a `position: relative;`, and `absolute` to them, manually positioned each segment with `%`. All the segments got their `opacity` lowered to 30%, so the visualized number could get the 100%, and that problem was solved in the script file.

### Javascript
After declaring the usable main elements, I made a new `Date` type variable, which I used for keeping the timer easily updated (Didn't had to deal with the second/minute conversion). Then I made a function to reset said timer to 00:00. Added an event listener to the button, that calls for the `StartTime` function that is the main logic component. With each click a boolean switches and decides if you started a new counting, or stopped the current one. If started, then a `setInterval` keeps incrementing the time by one second and changing the displays. If not, then the timer and the setInterval function gets reset. 

The other important part is *"How to visualize each number with the 7 element?"*, and that is answered in the `Segmenting()` function. It takes two param: the first one is where should it display, and the other is which number. In this, if statements searches for the right number, and the right segments gets their `opacity` changed up to 1, so they get fully green.

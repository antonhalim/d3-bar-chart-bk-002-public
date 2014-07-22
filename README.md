---
tags: D3, JavaScript library, data visualization, PhantomCSS, beginner, WIP
language: JavaScript
resources: 5
---

# Bar Chart Introduction to D3.js

|Section| Sub-Section | 
|:------:|:-------------:|
|Overview| [Objectives](#objectives)| 
|Instructions| [Intro to D3](#intro-to-d3js)| 
|| [Testing Suite](#testing-suite)
|| [Getting Started](#getting-started)|

## Objectives
* Get comfortable using a JavaScript library
* Correctly require and use the [D3.js library](https://github.com/mbostock/d3/wiki)
* Create a bar chart using D3

## Instructions
### Intro to [D3.js](http://en.wikipedia.org/wiki/D3.js)
* D3 stands for Data-Driven Documents
* It is a JavaScript library that uses data to drive the creation of dynamic graphs, charts, etc. that which run in web browsers
* If you read the New York Times online, Gawker, really any online publication, you're probably seen D3 in action. Here are some examples:
  * [Four Ways to Slice Obama's Budget Proposal](http://www.nytimes.com/interactive/2012/02/13/us/politics/2013-budget-proposal-graphic.html)
  * [2013 Budget](http://www.brightpointinc.com/interactive/budget/index.html?source=d3js)
  * [How the Facebook Offering Compares](http://www.nytimes.com/interactive/2012/05/17/business/dealbook/how-the-facebook-offering-compares.html)
  * [2012 Electoral Map](http://elections.nytimes.com/2012/ratings/electoral-map)

### Testing Suite
* This lab relies on PhantomCSS for testing. PhantomCSS takes a picture of the bar-chart div and compares it to a picture of the completed bar chart. If the pictures are somewhat similar, it then reports back about the percentage of difference. Screenshots are saved to the `screenshots` folder and failures are saved to the `failures` folder. Comparision images have `diff` in their name with differences displayed in pink. If you want to learn more about PhantomCSS, check out its [repo](https://github.com/Huddle/PhantomCSS).
* All the code being tested, along with the testing file, can be found in the folder `bar-chart`. All other folders are for the testing framework. Write your JavaScript code in `bar-chart/chart.js` and alter HTML in `bar-chart/index.html`. 
* Run `brew install casperjs --devel` from your terminal. PhantomCSS relies on CasperJS. Check out the [CasperJS docs](http://casperjs.org/) for more info.
* To run the tests you must be in the main folder `d3-bar-chart`. In the terminal, enter `casperjs test bar-chart/testsuite.js`.

### Getting Started
* To know how to scale each bar in the barchart, you need to find the maximum length of a bar. In the `bar-chart/chart.js` file, make a new variable called `maxValue`. This variable will be equal to the maximum value in `election`. Though you could easily hardcode this value, it would be good practice to interate through the array to find the highest value.
* More instructions
* More instructions
* Mor instructions
* Remove the "blah blah blah" text from the `bar-chart` div in `index.html`. It was just there because PhantomCSS does not reliably run the testing suite on empty divs.


## Resources
* [Mike Bostock's Blog](http://bost.ocks.org/mike/) - [Let's Make a Bar Chart](http://bost.ocks.org/mike/bar/)
* [Wikipedia](http://en.wikipedia.org/) - [D3.js](http://en.wikipedia.org/wiki/D3.js)
* [CSS Tricks](http://css-tricks.com/) - [Using SVG](http://css-tricks.com/using-svg/)
* [GitHub](https://github.com/) - [PhantomCSS](https://github.com/Huddle/PhantomCSS)
* [CasperJS](http://casperjs.org/) - [Docs](http://casperjs.readthedocs.org/en/latest/)

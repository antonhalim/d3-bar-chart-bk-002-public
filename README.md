---
tags: D3, JavaScript library, data visualization, PhantomCSS, beginner, WIP
language: JavaScript
resources: 8
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
* You're going to be making a simple bar graph for fake data of the voter turnout for the last election by county.
* When you use an external JavaScript library, the first step is to require it. Go ahead and require the D3 library in `index.html`. To check that the library is getting loaded correctly, type `d3` into the console when you open `index.html` in the browser. The console should return an object. If it returns `d3 is not defined`, go back and fix your code.
* The second step will be to require your JavaScript code that uses the library. Add HTML to `index` the will require `chart.js`. Open `index.html` in your browser and type `election` the the console to make sure you required `chart.js` correctly. The console should return an array of objects.
* When you make a bar chart by hand, one of the first things you think about if what kind of scale to use. For a bar chart, a [linear scale](http://easycalculation.com/maths-dictionary/linear_scale.html) is pretty typical. Make a new variable, `x`, and set it equal to `d3.scale.linear();`.
* Another thing that you might think about when drawing a bar chart by hand is how short and tall you want the bars to be (the bars min height and a max height). In D3, this min and max will be two values in an array that is passed as an argument to the linear scale's `.range` method (remember, you called the scale `x` in the step above). Let's make the the max height 420 pixels and the min height 0 pixels.

```javascript
x.range([0, 420]);
```
* One of the last things you probably think about when drawing a chart by hand is what the data's min and max values are. In this case, the min value is clearly 4, but lets hardcode it as 0 to allow for some election counties to have a 0% participation rate in the election. In the next step, we'll find the highest percentage of participation.
* Make a new variable called `maxTurnOut`. This variable will be equal to the maximum value in `election`. Though you could easily hardcode this value as 40, it would be good practice to interate through the array to find the highest value.
* The linear scale has a `.domain` method that accepts and array of two values, much like the `.range` method above. Let's use the values 0 and maxTurnOut to set the domain.

```javascript
x.domain([0, maxTurnOut]);
```
* When drawing a chart by hand, you must select a poster board or a sheet of paper. This next step is kind of like that. It's time to choose the location of where the chart will be drawn. In this case, select the div with the class `bar-chart`. 

```javascript
var chart = d3.select(".bar-chart");
```

* When you draw a bar chart, you know where to find the data. D3, however, doesn't automatically know which data to use. You tell D3 to use the data `election` by binding each element in `election` to a new div. You can do this in two steps or one step, both seen below. For help on method chaining, see [Mike Bostock's blog](http://bost.ocks.org/mike/bar/#chaining).

```javascript
var bar = chart.selectAll("div");
var barUpdate = bar.data(election);
// or 
var barUpdate = chart.selectAll("div").data(election);
```

* Mor instructions
* Remove the "blah blah blah" text from the `bar-chart` div in `index.html`. It was just there because PhantomCSS does not reliably run the testing suite on empty divs.


## Resources
* [Mike Bostock's Blog](http://bost.ocks.org/mike/) - [Let's Make a Bar Chart](http://bost.ocks.org/mike/bar/)
* [Wikipedia](http://en.wikipedia.org/) - [D3.js](http://en.wikipedia.org/wiki/D3.js)
* [CSS Tricks](http://css-tricks.com/) - [Using SVG](http://css-tricks.com/using-svg/)
* [GitHub](https://github.com/) - [PhantomCSS](https://github.com/Huddle/PhantomCSS)
* [CasperJS](http://casperjs.org/) - [Docs](http://casperjs.readthedocs.org/en/latest/)
* [D3](https://github.com/mbostock/d3/) - [Linear Scale](https://github.com/mbostock/d3/wiki/Quantitative-Scales#linear)
* [D3](https://github.com/mbostock/d3/) - [Select All](https://github.com/mbostock/d3/wiki/Selections#d3_selectAll)
* [Aligned Left Blog](http://alignedleft.com) - [D3 Scales](http://alignedleft.com/tutorials/d3/scales)
* [Easy Calculation](http://easycalculation.com/) - [Linear Scale](http://easycalculation.com/maths-dictionary/linear_scale.html)

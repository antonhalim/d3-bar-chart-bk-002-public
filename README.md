---
tags: D3, JavaScript library, data visualization, PhantomCSS, beginner, WIP
language: JavaScript
resources: ?
---

# Intro to D3.js with Bar Charts

|Section| Sub-Section | 
|:------:|:-------------:|
|Overview| [Objectives](#objectives)| 
|Instructions| [Intro to D3](#intro-to-d3js)| 
|| [Testing Suite](#testing-suite)
|| [Getting Started](#getting-started)|

## Objectives
* Get comfortable using a JavaScript library
* Correctly require and use the [D3.js library](https://github.com/mbostock/d3/wiki)
* Understand [SVG](http://css-tricks.com/using-svg/)s and how to use them
* Understand how enter, update, and exit work
* Create a bar chart using d3

## Instructions
### Intro to [D3.js](http://en.wikipedia.org/wiki/D3.js)
* D3 stands for Data-Driven Documents
* It is a JavaScript library that uses data to drive the creation of dynamic graphs, charts, etc. that which run in web browsers
* If you read the New York Times online, Gawker, really any online publication, you're probably seen D3 in action. Here are some examples:
  * [Four Ways to Slice Obama's Budget Proposal](http://www.nytimes.com/interactive/2012/02/13/us/politics/2013-budget-proposal-graphic.html)
  * [2013 Budget](http://www.brightpointinc.com/interactive/budget/index.html?source=d3js)
  * [How the Facebook Offering Compares](http://www.nytimes.com/interactive/2012/05/17/business/dealbook/how-the-facebook-offering-compares.html)
  * [2012 Electoral Map](http://elections.nytimes.com/2012/ratings/electoral-map)
* For animations, D3 relies a simple pattern: enter, update, and exit.
  * Enter: adds items to a document
  * Update: alters appearance of visualizations of existing data within a document when the data changes
  * Exit: removes items from a document when the data is no longer relevant/needed

### Testing Suite
* This lab relies on PhantomCSS for testing. All the code being tested, along with the testing file, can be found in the folder `bar-chart`. All other folders are for the testing framework. Write your JavaScript code in `bar-chart/chart.js` and alter HTML in `bar-chart/index.html`. If you're curious about PhantomCSS, check out its [ repo](https://github.com/Huddle/PhantomCSS).
* Run `brew install casperjs --devel` from your terminal. PhantomCSS relies on CasperJS. Check out the [CasperJS docs](http://casperjs.org/) for more info.
* To run the tests, from the main folder `d3-bar-chart`, enter `casperjs test bar-chart/testsuite.js`.

### Getting Started
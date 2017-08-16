# Web Performance Optimized Website

This website was provided unoptimized with many performance problems leading to slow initial loading, excessive cpu usage, and performance very far from a 60fps target.

I implemented many web performance optimizations to make the page load and run faster. Google Page Speed currently gives a score of ~ 97 on both mobile/desktop for the index.html page. The pizza.html page was optimized so that functions making visual changes don't cause jank i.e. maintains a FPS of 60fps or in other words runs animation functions in under 16ms.

### Initial Load Optimizations

The relevant page for these optimizations is `index.html` in the root directory.

* Images losslessly optimized and resized to be appropriate for usage in the actual design
* Gzipping compression and some caching already implemented by github pages hosting, but if I could access .htaccess I'd add rules to also cache some resources that have short expirations set in the headers
* Main stylesheet CSS inlined since it was a very small file that wasn't worth making an extra request, otherwise I'd just concat/minify all the stylesheets
* Print CSS stylesheet made to load conditionally using the media attribute
* HTML and Javascript for `index.html` minified to reduce file size
* All javascript files now being loaded asynchronously with async attribute
* Google Webfonts made non-render blocking by using the Google Webfont Loader to load external fonts asynchronously

### Webapp Performance Optimizations

The relevant page for these optimizations is `pizza.html`, in the `views` directory.

* Images used on the page losslessly optimized
* Unused CSS declarations removed via UnCSS
* Fixed layout thrashing by switching Javascript triggered CSS changes from `left: __px` and other position settings to using CSS transforms so the browser only has to composite the layers instead of forcing reflows
* Used viewport positioning units instead of absolute positioning for animated background elements to reduce the total number of elements that need to be rendered to fill the user's window from 200 to 20
* Replaced reading of actual scroll position with an arbitrary value pseudo scroll tracker to prevent unnecessary DOM reads triggering layout for a simple animation effect
* Debounced scroll event functions using `requestAnimationFrame` to prevent excessive calls to update functions
* Refactored pizza element resizer to remove unnecessary DOM reads of element sizes, instead directly setting the sizes of elements
* Used `getElementsByClassName` instead of `querySelectorAll` for slight gain in grabbing large numbers of DOM elements, used `classList.add` instead of `className` for better performance
* Cached various DOM element references to prevent unnecessary retrievals of previously retrieved DOM collections
* Minimized number of DOM append operations by using Document Fragments to collect all created elements and appending them in one append operation
* Made animated element generator asynchronous loading compatible and added async attribute to script tags

## How to Run

View the live web version at [https://sunnymui.github.io/frontend-nanodegree-mobile-portfolio/](https://sunnymui.github.io/frontend-nanodegree-mobile-portfolio/)

The homepage is index.html; pizza.html can be reached by clicking on the link for Cam's Pizzeria.

OR

Clone the repo and click on either index.html or views/pizza.html to see each optimized page.

View web performance information using Chrome DevTools' Performance tab by recording a performance snapshot on load and while using the pages. Check page loading speed scores using Google Page Speed.

## Original Specifications for Website Performance Optimization Portfolio Project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository and inspect the code.

### Getting started

#### Part 1: Optimize PageSpeed Insights score for index.html

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ./ngrok http 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

#### Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js.

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>

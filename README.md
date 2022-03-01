# Frontend Mentor - Launch countdown timer solution

![Design preview for the Launch countdown timer coding challenge](./design/desktop-preview.jpg)

This is a solution to the [Launch countdown timer challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See hover states for all interactive elements on the page
- See a live countdown timer that ticks down every second (start the count at 14 days)
- **Bonus**: When a number changes, make the card flip from the middle

### Links

- Solution URL: [https://github.com/KaskaS-O/launch-countdown-timer](https://github.com/KaskaS-O/launch-countdown-timer)
- Live Site URL: [https://kaskas-o.github.io/launch-countdown-timer](https://kaskas-o.github.io/launch-countdown-timer)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

My main goal was to create an universal countdown.

The difficulty was in data provided - normally when thinking about countdown, you know/get the deadline (time or date). In this challenge we get remaining time until deadline, which means our deadline date/time is changing every time we run the app. My approach was to create the app in a way you can modify the remaining time or (with a little change in code) swap it with given deadline. It took me some time to get to the solution, but in the end I'm quite satisfied with the outcome.

Another task was to learn how to handle .svg files with React. Surprisingly for me it was the easiest part - for active state I had to change the fill color of social media icons. I did that by importing them as React Components.

The ultimate challenge was (and still is) animating the cards to flip. Another surprise in this project - this time I wasn't expecting the bonus task to be so difficult. I found some ready flip clocks and countdowns, even written with React, but not ready to use them with my countdown. For now I decided to leave it and come back later.

### Continued development

I want to create the animation for flipping cards of the countdown. Because I'd like to avoid changing the core of my app, probably I'd go with managing CSS classes depending on app's state.

### Useful resources

- [Styling SVG icon in React.js. Let’s use svg icons in a way that… | by Wendee](https://wendeehsu.medium.com/styling-svg-icon-in-react-js-bfd3d826901d) - This helped me with styling SVG icons in React (changing color of the icons on hover)

## Author

- Website - [KaskaS-O](https://github.com/KaskaS-O)
- Frontend Mentor - [@KaskaS-O](https://www.frontendmentor.io/profile/KaskaS-O)

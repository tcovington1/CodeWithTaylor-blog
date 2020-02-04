---
slug: ' /100_days_of_code'
date: '2020-01-31'
title: ' #100DaysOfCode (RD 2)'
---
Hey thank you for coming on this journey with me!

I'll be updating this post each day with what I'm working on, what I did, and thoughts a long the way! So come back when you'd like to see what's been going on. In my previous [post](https://codewithtaylor.com/posts%20/100-days-note-beforehttps://codewithtaylor.com/posts%20/100-days-note-before) I mentioned some goals I'll be looking to achieve during these 100 days of coding.

Before I started, here's a little context about what I've been working on:

Before I started to code, I did have other hobbies :) and one was I love to watch football. I've always loved watching college football and see how the players develop and get into the NFL. Well now most of my time goes to coding so I don't have as much time to sit and watch the players. SO I decided to create a website to track my favorite players in the NFL, I'll call it *"Utes in The NFL"* for now. It's a full-stack website using Ruby on Rails and PostgreSQL for the back-end, and React.js for the front-end. It's a CRUD (Create, Read, Update, Delete) site where I can continue working on my skills. I'll share links later when it's at a good spot and hosted on Heroku.

I'm also working on my spare time (after my full-time job, parenting, and being a husband) as a freelance developer with a good friend of mine. I've got my second client, where I'll be creating a portfolio photography web site. We're using Sketch to create a prototype, and we'll see what tools or languages we'll use to build the best site. 

Let's get started!

###  **Day 1**

* Last night I spent a lot of time working on my NFL project trying to figure out how to  click a PlayerCard component  I mapped from my database and go to a "show" page for that player using the ID. This morning I started looking through the [Rails Router](https://guides.rubyonrails.org/routing.html) documentation and was able to figure out what I needed! In my Rails routes file I just needed to add the `/:id` like this:

```
     namespace :api do
       resources :players
       get '/players/:id', to: 'players#show'
     end  
```

* I also make a few updates to my [personal portfolio site](https//:taylorjcovington.com). All I did was update the image size so the image load time was much quicker.
* I've create this blog post to get the ball rolling

- - -

### Day 2

* Today I worked on the NFL app. I built out the PlayerShow page to actually show the players information. For some reason in my form when I choose if the player is a starter (it's a boolean) it's not updating the true/false in the DB so I'll need to figure that out. 
* I also added the Devise gem and Context API AuthProvider to the project. My plan for this is to allow an admin login to add, edit, and delete players ONLY if logged in. I've also update the navbar to show if you're logged in or not.
* Tip of the day: Use [Iconify](https://iconify.design/icon-sets/https://iconify.design/icon-sets/) for icons in your projects. It has every icon you'll need for your project.

---

### Day 3

* I didn't get much done today, sick kids and the Super Bowl took most of my time. 
* Today I studied how to implement a search feature in my React on Rails NFL player site. My idea is I want users to be able to search both teams to show Utah Ute players on that team, or search by player name.
* I also spend time researching how to add a "like" button to my blog site. No luck here yet so I'll spend more time researching.
---
### Day 4
* Today I started a new freelance project for a local client. We are rebuilding their videography website using React.js! Today was the setup day:
  1) Started the VS Code project using ```create-react-app```
  2) Added ```react-router-dom``` for my routes
  3) Setup the file structure for the project
* **Dad Aside** - My 2 year old son keeps getting a cold and can't ever kick the cough. He had lung surgery at 5 months old so our pediatrician is thinking he has asthma anytime he gets sick. So right now he has to do a steroid mask three times a day. 

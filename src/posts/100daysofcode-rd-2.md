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

### **Day 1**

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

- - -

### Day 3

* I didn't get much done today, sick kids and the Super Bowl took most of my time. 
* Today I studied how to implement a search feature in my React on Rails NFL player site. My idea is I want users to be able to search both teams to show Utah Ute players on that team, or search by player name.
* I also spent time researching how to add a "like" button to my blog site. No luck here yet so I'll spend more time researching.

- - -

### Day 4

* Today I started a new freelance project for a local client. We are rebuilding their videography website using React.js! Today was the setup day:

  1. Started the VS Code project using `create-react-app`
  2. Added `react-router-dom` for my routes
  3. Setup the file structure for the project
* **Dad aside:** My 2 year old son keeps getting a cold and can't ever kick the cough. He had lung surgery at 5 months old so our pediatrician is thinking he has asthma anytime he gets sick. So right now he has to do a steroid mask three times a day. 

- - -

### Day 5

* Started on the navbar for the freelance videography website. My goal is to learn new ways to do a navbar, write clean code, and think about my comments and how it might help another developer in the future. I also want to focus on scalability.
* A  **thought for the day** ... All of this will pay off. The goal is to be a developer full-time. I know the hard work and hustle will pay off eventually. For now, the focus is on writing good code, learn something new every day, and network with anyone and everyone to build real connections in the community. The goal is to hustle harder.

- - -

### Day 6

* Wife's birthday today so I didn't get much coding in. I did research how to create logos using [Sketch](https://www.sketch.com) though. A passion of mine is front-end design and I'd love to learn how to create logos for my projects. There's no better way to learn, just do it.
* I also worked on making a navbar responsive.
* I also continued working on my network in the dev community both on Twitter and locally. A door to an opportunity closed for now, but that does not mean it'll be closed forever. My time will come.

---

### Day 11
February 10th, 2020
* It's been a busy week. Over the weekend I decided to start a larger React on Rails project called *DevChat*. I wanted to start a project with more advanced associations such as a User has many Posts and Posts have many comments. Then Posts belong to Users, and comments belongs to Posts. These associations are created in your routes.
* Today I got my first rejection email from a company I applied for in early January. The first interview went really well, the team was great! I then met a week later with the CEO. To be honest, I thought I did really well and impressed the team. But this time it just didn't work out. I'll be writing another post about this first coding interview soon.
* I also had another interview for another company. The interview was a video chat that lasted about 15 minutes. Mostly general questions about me, my projects, why development. Things went well! A few hours later a received a rejection email. So 0/2 so far but the hustle doesn't stop
* A recent phrase I've learned is **Humble & Hungry **, I think I'll start living my this because I feel like it explains who I am well. 
* Lastly, I started a course on Udemy to learn the MERN stack. I want more flexibility with my apps and to add this to my stack offering!

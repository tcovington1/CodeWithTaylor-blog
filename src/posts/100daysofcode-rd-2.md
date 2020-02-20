---
slug: /100_days_of_code
date: '2020-01-31'
updated: '2020-02-19'
readtime: 10 min read
title: ' 100 Days Of Code'
---
Thank you for coming on this journey with me!

I've decided to start round 2 of the #100DaysOfCode challenge from [Twitter](https://twitter.com/codewithtaylor). You're probably familiar with the hashtag already, but if not check it out [here](https://twitter.com/search?q=%23100DaysOfCode&src=typeahead_click). Twitter has a fantastic dev community! There are a ton of new people learning to code with you, so it's nice knowing you're not alone. When you struggle, there is someone out there struggling as well.

The first round I did of #100DaysOfCode was really successful. Check it out on my [Twitter page](https://twitter.com/codewithtaylor). I started it before I went into my dev bootcamp, and ended after I finished. It helped me stay accountable and sharing my progress. 

### --- Goals ---

I'm going to post what I'm working on every day here in this blog. In these 100 days I want to:         

1. Blog and post my progress often         
2. Code and contribute to GitHub daily (obvious one)
3. Build build build - a goal of mine is to really push building full-stack app           and web sites without a tutorial. I want to get stuck, search the docs, and 
            fix it.
4. Work as a full-time developer.

I'll be updating this post often with what I'm working on, what I did, and thoughts a long the way! So come back when you'd like to see what's been going on. In my previous [post](https://codewithtaylor.com/posts%20/100-days-note-beforehttps://codewithtaylor.com/posts%20/100-days-note-before) I mentioned some goals I'll be looking to achieve during these 100 days of coding.

Before I started, here's a little context about what I've been working on:

* Utes in the NFL app - React.js, Ruby on Rails
  * React.js | Ruby on Rails
  * Football is a passion of mine but I don't have much time to watch. So I'm building a site to track and display all of my favorite college football players in the NFL.

* Interview tracking app
  * MERN stack
  * I allow my curiousity to drive my learning. I've always wanted to learn Node and MongoDB for the back-end so I've started learning and I'm applying it to this app.

I'm also working on my spare time (after my full-time job, parenting, and being a husband) as a freelance developer with a good friend of mine. We have our second client, where we'll be creating a portfolio photography web site.

So I'm doing a ton right now but each day I've organized my time to allow about 2-3 hours to study and code. At the end of the day I'm writing down 'todos' so I know what my goals are for the next day.

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

### Days 7 - 11
02/12/20
* It's been a busy week. Over the weekend I decided to start a larger React on Rails project called *DevChat*. I wanted to start a project with more advanced associations such as a User has many Posts and Posts have many comments. Then Posts belong to Users, and comments belongs to Posts. These associations are created in your routes.
* A recent phrase I've learned is **Humble & Hungry**, I think I'll start living my this because I feel like it explains who I am well. 
* Lastly, I started a course on Udemy to learn the MERN stack. I want more flexibility with my apps and to add this to my stack offering!

---
### Days 12-13
02/12/20
* My DevChat app is going well! I've been able to create users and add, update, and delete posts! I'm having a weird issue with the form. Anytime I add a new post, it shows up in the form so I'll need to figure this out. Also, when I log into a new user and create a post it shows on the other users page. Seems odd but it must be something in the controller on the Rails side.
*  In the MERN course I've been learning about how to navigate the Next.js framework and today we connected a MongoDB Atlas cluster with Next.js. 

---
### Days 14-20
02/19/20
* Sick kids.... sick dad... === no sleep. But I still coded!
* This past week I've decided to go through my [portfolio](https://taylorjcovington.com) and my blog posts to refactor code and content.
* I had noticed as I was reading over my first 13 days, I've changed my projects a lot! So I've decided I'm going to stick to one large project and updating projects along the way (such as my portfolio site and blog).
* My large project I'm working on is a MERN full-stack website (MongoDB, Express, Node.js, React.js). This site will be a "DevChat" site when I'll have user authentication where you can log into a profile, create posts, and others can comment on your posts.
* I'll be using the [Udemy.com](https://www.udemy.com/https://www.udemy.com/) course by Brad Traversy called ["MERN Stack Front To Back"](https://www.udemy.com/course/mern-stack-front-to-back/https://www.udemy.com/course/mern-stack-front-to-back/)

# Final Assignment Briefing

You have reached the end of the full stack curriculum and now it’s your time to shine! ✨

_TL;DR: Build a Dog–, Cat–, or Babysitter app called Sitterly that features user authentication, authorization, profiles, availability, reviews, and bookings. User stories below. You have 5 days._

### How Does This Work?

You will get 5 days to build an app – including the weekend. In this briefing is a list of user stories (see below). Every user story that you complete successfully grants you points. You need all points to pass the assessment, but you may get stuck on some features. If that happens, there are Bonus Stories to choose from to make up for the missed points. You will present your app to your teacher in a 1-on-1 evaluation session.

> 💅 The result of your hard work needs to be kept in a private repository, but you may still use it when you are applying for jobs by granting interviewers access to it or by showing off your work during interviews. If you deploy the app (we can help with that after the course), you can send people links to your app as well.

### Stack

You will use PostgreSQL for your database, FastAPI for your API, and React with Redux in your front-end. The starter repository has:

- a fully set up FastAPI app with Authentication, ready for you to start implementing your own endpoints, authorization, and app-specific logic.
- a fully set up React, and ReactRouter app with Sign Up, Log In, and Log Out.

### User Stories to Build Sitterly

🎁 These are the features you got for free.

- **Sign Up** – As a User, I can sign up with my email and a password. Passwords should be at last 12 characters long and they should include both letters and numbers.
- **Log In** – As a User, I can log in with my username and password.
- **Log Out** – As a User, I can log out when I’m logged in.

👷 These are the features you need to build.

1. **Create SitterProfile** – As a User, I can create my SitterProfile, with my name, the city I live in, and my hourly rate in euros.
2. **Browse SitterProfiles** – As a User, I can browse all the SitterProfiles in the app. I can see 10 SitterProfiles per page.
3. **Book a Sitter** – As a User, I can book a sitter from a start date and time until an end date and time.
4. **Browse Bookings** – As a Parent/Owner or as a Sitter, I can browse my Bookings. The Booking shows clearly that I am the Sitter or the Parent/Owner.
5. **Cancel my Booking** – As a User or as a Sitter, I can cancel an upcoming Booking.
6. **Review Sitter** – As a Parent/Owner, I can Review my Sitter after a Booking.
7. **Review Parent/Owner** – As a Sitter, I can Review the Parent/Owner after a Booking.

#### Bonus Stories

🌟 These are the features you may build for extra points.

- **City Filter** – As a User, I can filter SitterProfiles on their City.
- **Update SitterProfile** – As a Sitter, I can update my SitterProfile.
- **Delete SitterProfile** – As a Sitter, I can delete my SitterProfile – when I do, all Bookings are automatically canceled.
- **Sitter Availability** – As a Sitter, I can add my weekly Availability.
- **Sitter Unavailability** – As a Sitter, I can add exceptions to my Availability when I’m unavailable. Active Bookings are canceled automatically if I am Unavailable.
- **Live App** – As a User, I can visit the app on the internet (for this, you may use the deployment guides in Kyna).

### Data Model

Below is a list of entities that we defined to model the functionality in our app. This is a definitive list, but you are not supposed to implement them all at once! This is here, just to help you get an overview of what the fully finished app – including bonus stories! – might look like.

> Implement these models ONLY when you are actually building the related feature! We do **not** want to see unused models in your code.

#### User

Users are the core of this app. They can create a SitterProfile to offer their service, and they can place Bookings to order a Sitter for their babies, dogs, or cats.

- id
- email
- password
- created_at
- updated_at

##### User Relations

- User has (potentially) one SitterProfile
- User has many Bookings
- User has many Reviews (given)

#### SitterProfile

- id
- name
- city
- hourly_rate_euro
- created_at
- updated_at

##### SitterProfile relations

- SitterProfile belongs to User
- SitterProfile has many Bookings
- SitterProfile has many Reviews (received)
- SitterProfile has many “Availabilities”
- SitterProfile has many “Unavailabilities”

#### Review

- id
- score (1-5)
- message (optional)
- for (“sitter” or “parent”/“owner”)
- created_at
- updated_at

##### Review relations

- Review belongs to reviewer (User)
- Review belongs to reviewee (User)

#### Availability

- id
- week_day_start (1-7)
- week_day_end (1-7)
- hours_start (time)
- hours_end (time)
- created_at
- updated_at

##### Availability relations

- Availability belongs to SitterProfile

#### Booking

- id
- starts_at (datetime)
- ends_at (datetime)
- is_canceled (boolean)
- description
- created_at
- updated_at

##### Booking relations

- Booking belongs to User (parent/owner)
- Booking belongs to SitterProfile (sitter)

#### Unavailability

- id
- starts_at (datetime)
- ends_at (datetime)
- created_at
- updated_at

##### Unavailability relations

- Unavailability belongs to SitterProfile

### Tips

- Focus on one feature at the time.
- Plan out your feature first, then build it.
- Create a new branch when you start working on a new feature. Merge to main after it works – rinse and repeat. If you get stuck on a feature, commit everything, push it, check out main and create a new branch for the next feature. This way, you can revisit your abandoned feature branches later, if you have more time.
- Unstyled features are not acceptable, but **save styling your feature until after it works!** Styling can quickly become a time sink; set aside a fixed amount of time for each feature to work on styling.
- Make notes and bring them to your evaluation session.
- Reach out to your instructors if you get stuck for a long time!

### Git Tips

🕊️ Creating a new branch:

```shell
# make sure you're on an up to date main
$ git checkout main
$ git pull origin main

# then create a new branch
$ git checkout -b feat/bookings
```

📸 Making commits:

```shell
# Go over your changes and only stage what you need
$ git add -p

# Then, see what untracked files you may need to add
$ git status

# Stage new files
$ git add app/bookings.py

# Now commit
$ git commit -m "feat(Bookings): Add CRUD for bookings"
```

🌊 Merging branches

```shell
# First, make sure everything is commited!

# Check out main first (if you are merging TO main)
$ git checkout main

# Then merge in your (feature) branch
$ git merge feat/bookings

# Push it
$ git push origin main

# Now you can create a new branch for the next feature!
```

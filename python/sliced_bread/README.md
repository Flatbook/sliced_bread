# Intial Thoughts

***See below inital thoughts for implementation***

After reading the requirements, my inital thoughts for this problem is, in following this the idea to create a 'MVP' is to keep it simple. Assuming with scaling, only more drinks would be ordered, not more drinks choices to be purchased added as this site is deisgned to describe and sell the specific drink. Keeping that in mind djanoo was used with bootstrap instead of something like pairing react. As well, being inside a docker container, webpack, react, djanoo, and the docker container all have to play well together and continue to function. Future version updates could break the app in a non-straight forward way. As well keeping the time suggestion in mind, I did'nt want to over complicate my working environment and spend less time building. But, if the website was 'hypothetically' continued and design requirements needed more custom work. Research into the trade off of using something like react for the frontend should be done.

One can think of the OrderModel as a one-to-one relationship model as each 'customer' has one order. This is also taking into mind the focus of privacy. Allowing for customers to order seperate orders under different aliases. This also makes it clear for a 'admin' user to check a order and mark it complete when the drink has been shipped. In further development processed orders could have simple logic for storage and follow-up for deletion clean-up.

Overall considering TDD and the timeframe. A barebones MVP was created with the idea that depending on after-studied customer demand we can pivot in the need direction to met needs and make imporvements.

# Implementation

In the end I continue with the django/bootstrap approach, as simple design choices allowed me to quickly set up a the needed parts to capture user data. I continued with TDD, testing the views and models so if anyone were to 'contribute' in the future. If the model was changed testing would not pass. I seperated the order form and landing for more privacy when reaching the landing page.

# Future thoughts

A email system could be implemented so the unique order details url page could be stored with the user and visted at any point as well as putting the order info directly into the email.

# How it works

-A user visits the base site and is brought to the landing page with a: Picture of the drink, the name, a why button, and a call to action button
-Two action options: Why and Start sipping. Why: leads to a description of why the drink is great in a toggle blurb. Start sipping: leads to the order form to collect user data
-After entering user data the user is presented with the order details

***OTHER***
-I added pillow to the docker requirements.txt to host the images needed on localhost
-to run tests run: python manage.py test
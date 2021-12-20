# The Milkshake

Couldn't think of anything else more delicious in my limited amount of time 😉.

## Setup

---

*This is purely a React project built using the Create-React-App template.*

In accordance with the instructions provided on the sliced_bread repository, I quickly (and hastily as I didn't read the fine print) added a Docker file and a docker-compose file to take of containerizing this React application. 

Very simply:

  1. `cd` into `react/sliced_bread` from the root of the `sliced_bread` repo in your terminal application.
  2. Run `docker-compose up -d --build` to get the image created and to load up the Docker container.
  3. Head over to `localhost:3001` in your favourite browser to see the finished product.
  4. Run `docker-compose stop` when you're done with it :)
  5. If you want to run it again, go ahead and `cd` into `react/sliced_bread` an run `docker-compose start` :)


  *Note: In the interest of transparency, my very rusty Docker knowledge was aided by [the following document](https://mherman.org/blog/dockerizing-a-react-app/). 

## Notes and caveats

---

Note 1: I basically didn't think of implementing a back-end for this (though I could have made a quick little Express/Node.js app to take care of the routing for me 🤷). That said, it's been *years* since I've done Java/Maven and I'm a little rusty with Python, so I figured I'd rather just get something out the door for the 2-3 hours I had. 

Note 2: For the URL and order confirmaiton number, I used `localStorage` in the interest of saving time. *Meaning, in no way am I saying that persisting a client's checkout information **solely** in the front-end is a good idea*. I just needed a quick and dirty way to meet the requirements of this exercise.

Note 3: The loading blurb when the app first loads up is not super UI friendly. I would probably have taken more time to make that nicer and a lot more subtle, as I'm pretty sure we don't like to visit websites that spell out to use how slow they are at loading up images.
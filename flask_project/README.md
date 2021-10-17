# Beverage App


Beverage app is a Flask based app using Jinja and HTML.

## Features

- Landing page displays the MVP Beverage
- User can add the selected drink to the cart
- The forms are validated and provide default inputs for customer's name and total number of drinks
- The form is CSRF protected
- The user can see a confirmatory message and link to track the order




## Installation

Beverage app requires - [Flask](https://flask.palletsprojects.com/en/2.0.x/) v2.0+ to run,  [Python](https://www.python.org/) v3.4+ to run


Install the dependencies using PIP and start the server.

```sh
$ pip install -U Flask
$ pip install -U WTForms
$ pip install wtforms-validators
cd flask_project

```




## Deployment



```sh
$ flask run
  Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
  ```

or:
```sh
$ python app.py 
  Running on http://127.0.0.1:5000/ ( Press CTRL+C to exit)
```

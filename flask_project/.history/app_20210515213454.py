from flask import Flask, render_template

app = Flask(__name__)

app.config['SECRET_KEY'] = ""


drinks =[{
    'title' : 'Sonder Sparkle Mojito',
    'description': 'A bit of sparkle and cheer come together flawlessly in this festive mocktail.'

},
{
    'title': 'French 75 Mocktail',
    'description': 'With the same taste profile of a classic French 75 — think lemon juice and a splash of bitters — this mocktail will energize your evening.'
}
]

@app.route("/")
def hello_world():
    return render_template('home.html',drinks=drinks)

@app.route("/btform")
def btform():
    return render_template('btform.html')

@app.route("/checkout",methods =['GET','POST'])
def checkout():
    name = None
    form = checkoutForm()
    return render_template("checkout.html", name=name, form = form)
if __name__ == '__main__':
    app.run(debug=True)


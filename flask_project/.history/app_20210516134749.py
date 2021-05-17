from flask import Flask, render_template
from form import checkoutForm
import os
app = Flask(__name__)

imagesFolder = os.path.join('static','images') 

app.config['SECRET_KEY'] = "my secret key"
app.config['UPLOAD_FOLDER'] =imagesFolder


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
def home():
    drink2 = os.path.join(app.config['UPLOAD_FOLDER'],'drink2.jpg')
    return render_template('home.html',drinks=drinks,user_image = drink2)

# @app.route("/btform")
# def btform():
#     return render_template('btform.html')

@app.route('/checkout')
def checkout():
    return render_template("checkout.html")

@app.route("/checkout",methods =['GET','POST'])
def checkout():
    name = None
    lname = None
    form = checkoutForm()
    #  #validate form
    if form.validate_on_submit():
        return 'Dear {}, your order for {} drinks is placed Succesfully.'.format(form.name.data,form.total.data) 
    return render_template("checkout.html",
     name=name,form = form)
      




if __name__ == '__main__':
    app.run(debug=True)


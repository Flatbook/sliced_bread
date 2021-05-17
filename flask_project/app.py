from flask import Flask, render_template,redirect,url_for,flash
from form import checkoutForm
import os
app = Flask(__name__)

imagesFolder = os.path.join('static','images') 

app.config['SECRET_KEY'] = "my secret key"
app.config['UPLOAD_FOLDER'] =imagesFolder


drinks =[{
    'title' : 'Sonder Sparkle Mojito',
    'description': 'A bit of sparkle and cheer come together flawlessly in this festive mocktail.'

}
]

@app.route("/")
def home():
    drink2 = os.path.join(app.config['UPLOAD_FOLDER'],'drink2.jpg')
    return render_template('home.html',drinks=drinks,user_image = drink2)


@app.route("/checkout",methods =['GET','POST'])
def checkout():
    name = None
    lname = None
    form = checkoutForm()
    details=[{
        'cx': form.name.data,
        'num':form.total.data
    }]
    
    if form.validate_on_submit():
        
        return render_template('confirm.html',name=name,form= form)
    return render_template('checkout.html',form=form,name=name)


@app.route("/track",methods=["GET","POST"])
def track():
    name= None
    total= None
    form=checkoutForm()
    if form.validate_on_submit():
        return 'Name {}, number of drinks {}.'.format(form.name.data,form.total.data)
    return render_template("track.html",form=form,name=name,total=total)


if __name__ == '__main__':
    app.run(debug=True)


from flask import Flask, render_template
from form import RegistrationForm,LoginForm

app = Flask(__name__)

app.config['SECRET_KEY'] = '3673a421966f95acc170acad8e940749'

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

@app.route("/register", methods=['GET', 'POST'])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():
        flash(f'Account created for {form.username.data}!', 'success')
        return redirect(url_for('home'))
    return render_template('register.html', title='Register', form=form)

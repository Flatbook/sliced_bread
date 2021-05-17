from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired

class checkoutForm(FlaskForm):
    name = StringField("First Name", validators = [DataRequired()])
    last_name = StringField("Second Name",validators=[DataRequired()])
    submit = SubmitField("Checkout")
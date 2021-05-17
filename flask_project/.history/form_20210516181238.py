from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField,IntegerField
from wtforms.validators import DataRequired
import secrets

class checkoutForm(FlaskForm):
    name = StringField("First Name",description="Tap to enter your first name", validators = [DataRequired()],default="Jane")
    lname = StringField("Last Name",description="Tap to enter your last name",validators=[DataRequired()],default="Doe")
    city = StringField("City",validators=[DataRequired()])
    state = StringField("Province",validators=[DataRequired()])
    country = StringField("Country",validators=[DataRequired()])
    total = IntegerField("Number of items",description="Tap to enter",validators=[DataRequired()],default = "2")
    submit = SubmitField("Checkout")


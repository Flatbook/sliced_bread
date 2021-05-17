from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField,IntegerField
from wtforms.validators import DataRequired

class checkoutForm(FlaskForm):
    name = StringField("First Name", validators = [DataRequired()])
    lname = StringField("Last Name",validators=[DataRequired()])
    city = StringField("City",validators=[DataRequired()])
    state = StringField("Province",validators=[DataRequired()])
    country = StringField("Country",validators=[DataRequired()])
    total = IntegerField("Number of items",validators=[DataRequired()],default = "2")
    submit = SubmitField("Checkout")
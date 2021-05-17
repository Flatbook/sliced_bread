from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired

class checkoutForm(FlaskForm):
    first_name = StringField("", validators = [DataRequired()],default = "Jane")
    last_name = StringField("",validators=[DataRequired()],default="Joe")
    submit = SubmitField("Checkout")
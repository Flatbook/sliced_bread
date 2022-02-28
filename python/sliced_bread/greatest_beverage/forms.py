from django import forms
from .models import Customer
from crispy_forms.helper import FormHelper
from crispy_forms.layout import Layout, Submit


class CustomerForm(forms.ModelForm):

    def __init__(self, *args, **kwargs):
            super().__init__(*args, **kwargs)
            self.helper = FormHelper()
            self.helper.form_method = 'post'
            self.helper.layout = Layout(
                'name',
                'quantity',
                'city',
                'province',
                'country',
                Submit('submit', 'Place Order', css_class='btn-success')
            )
    class Meta:
        model = Customer
        fields = ('name', 'quantity', 'city', 'province', 'country')


        


from django import forms
from .models import ContactForm


class ContactForm(forms.ModelForm):
    # Contact from model ContactForm 
    class Meta:
        model = ContactForm
        fields = ['name', 'phonenumber', 'email', 'message']
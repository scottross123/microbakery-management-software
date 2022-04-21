from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, DateTimeField, DecimalField, BooleanField, SubmitField
from wtforms_sqlalchemy.fields import QuerySelectField
from wtforms.validators import InputRequired, Length
from .models import Product

class CustomerForm(FlaskForm): 
    f_name = StringField('Customer\'s first name?', validators=[InputRequired(), Length(max=100)])
    l_name = StringField('Customer\'s last name?', validators=[InputRequired(), Length(max=100)])
    phone_num = StringField('Customer\'s phone number?', validators=[InputRequired(), Length(max=12)])
    submit = SubmitField('Add record!')

class OrderForm(FlaskForm):
    order_time = DateTimeField('Time ordered? (leave blank for current time)', format='%Y-%m-%d %H:%M:%S')
    pickup_time = DateTimeField('Pick up time?', format='%Y-%m-%d %H:%M:%S', validators=[InputRequired()])
    customer_id = IntegerField('Customer ID?', validators=[InputRequired()])
    submit = SubmitField('Add record!')

class LineItemForm(FlaskForm):
    quantity = IntegerField('Quantity?', validators=[InputRequired()])
    order_id = IntegerField('Order ID?', validators=[InputRequired()])
    product_id = IntegerField('Product ID?', validators=[InputRequired()])
    submit = SubmitField('Add record!')

class ProductForm(FlaskForm):
    name = StringField('Name of product?', validators=[InputRequired(), Length(max=100)])
    description = StringField('Description of the product?', validators=[InputRequired(), Length(max=500)])
    price = DecimalField('Price of the product?', validators=[InputRequired()], places=2)
    submit = SubmitField('Add record!')

class RecipeForm(FlaskForm):
    prep_time = IntegerField('Prep time?', validators=[InputRequired()])
    mix_time = IntegerField('Mixing and/or kneading time?', validators=[InputRequired()])
    ddt = IntegerField('Desired dough temperature? (for bread)')
    bulk_fermentation = IntegerField('Bulk fermenation time? (for bread)')
    proof = IntegerField('Final proofing time? (for bread)')
    baking_time = IntegerField('Baking/frying time?', validators=[InputRequired()])
    product_id = IntegerField('Product ID?', validators=[InputRequired()])
    submit = SubmitField('Add record!')

class IngredientForm(FlaskForm):
    name = StringField('Name of the ingredient?', validators=[InputRequired(), Length(max=100)])
    description = StringField('Description of the ingredient?', validators=[InputRequired(), Length(max=500)])
    cost = DecimalField('Price of the ingredient? (per pound?)', validators=[InputRequired()], places=2)
    submit = SubmitField('Add record!')

class FlourForm(FlaskForm):
    name = StringField('Name of the flour?', validators=[InputRequired(), Length(max=100)])
    description = StringField('Description of the flour?', validators=[InputRequired(), Length(max=500)])
    cost = DecimalField('Price of the flour? (per pound)', validators=[InputRequired()], places=2)
    grain = StringField('Type of grain? (include hardness, season, and species)', validators=[InputRequired(), Length(max=150)])
    protein = DecimalField('Protein %% of the flour?', validators=[InputRequired()], places=1)
    extraction = IntegerField('Flour extraction? (100 for whole grain flour)', validators=[InputRequired()])
    malted = BooleanField('Does this flour contain barley malt flour? (malted)', validators=[InputRequired()])
    submit = SubmitField('Add record!')

class SelectForm(FlaskForm):
    table_name = StringField('Name of the table?', validators=[InputRequired(), Length(max=100)])
    id = IntegerField('ID of the entity?', validators=[InputRequired()])
    submit = SubmitField('Confirm!')

def product_query():
    return Product.query

class AddItemsToOrderForm(FlaskForm):
    order_id = IntegerField('ID of order you want to add items to?', validators=[InputRequired()])
    product = QuerySelectField('Pick a product to add to order', query_factory=product_query, get_label='id')
    quantity = IntegerField('How many items?', validators=[InputRequired()])
    submit = SubmitField('Confirm!')

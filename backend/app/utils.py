# utility functions and dictionaries
from .models import Customer, Order, LineItem, Product, Recipe, Ingredient, Flour
from .forms import CustomerForm, OrderForm, LineItemForm, ProductForm, RecipeForm, IngredientForm, FlourForm

def serialize(row):
    d = {}
    for column in row.__table__.columns:
        d[column.name] = str(getattr(row, column.name))

    print(d)

    return d

table_list = {
    'customer': Customer,
    'order': Order,
    'lineitem': LineItem,
    'product': Product,
    'recipe': Recipe,
    'ingredient': Ingredient,
    'flour': Flour,
}

'''
form_list = {
    'customer': CustomerForm(),
    'order': OrderForm(),
    'lineitem': LineItemForm(),
    'product': ProductForm(),
    'recipe': RecipeForm(),
    'ingredient': IngredientForm(),
    'flour': FlourForm(),
}'''

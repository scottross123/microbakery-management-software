import flask
from flask import Blueprint, request
import app
from .models import Customer, Order, LineItem, Product, Recipe, Ingredient, Flour
from .forms import CustomerForm, OrderForm, LineItemForm, ProductForm, RecipeForm, IngredientForm, FlourForm

blueprint = Blueprint('blueprint', __name__, static_folder="static", template_folder='templates')

@blueprint.route("/")
def index():
    return flask.render_template("index.html")

@blueprint.route("/<table>")
def show_table(table):
    table_list = {
        'customer': Customer,
        'order': Order,
        'lineitem': LineItem,
        'product': Product,
        'recipe': Recipe,
        'ingredient': Ingredient,
        'flour': Flour,
    }

    try:
        results = table_list[table].query.all()
    except Exception as error:
        return flask.render_template("error.html", error=error)

    return flask.render_template("table.html", results=results)

@blueprint.route("/add_<record_table>")
def add_record(record_table):
    form_list = {
        'customer': CustomerForm(),
        'order': OrderForm(),
        'lineitem': LineItemForm(),
        'product': ProductForm(),
        'recipe': RecipeForm(),
        'ingredient': IngredientForm(),
        'flour': FlourForm(),
    }

    try:
        form = form_list[record_table]
    except Exception as error:
        return flask.render_template("error.html", error=error)

    return flask.render_template("add.html", record_table=record_table, form=form)
    

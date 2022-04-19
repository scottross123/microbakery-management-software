import flask
from flask import Blueprint, request, g
import app
from . import db
from .models import Customer, Order, LineItem, Product, Recipe, Ingredient, Flour
from .forms import CustomerForm, OrderForm, LineItemForm, ProductForm, RecipeForm, IngredientForm, FlourForm

blueprint = Blueprint('blueprint', __name__, static_folder="static", template_folder='templates')

@blueprint.before_request
def load_variables():
    g.table_list = {
        'customer': Customer,
        'order': Order,
        'lineitem': LineItem,
        'product': Product,
        'recipe': Recipe,
        'ingredient': Ingredient,
        'flour': Flour,
    }

    g.form_list = {
        'customer': CustomerForm(),
        'order': OrderForm(),
        'lineitem': LineItemForm(),
        'product': ProductForm(),
        'recipe': RecipeForm(),
        'ingredient': IngredientForm(),
        'flour': FlourForm(),
    }

@blueprint.route("/")
def index():
    return flask.render_template("index.html")

@blueprint.route("/<table>")
def show_table(table):
    try:
        print(g.table_list[table])
        results = g.table_list[table].query.all()
    except Exception as error:
        return flask.render_template("error.html", error=error)

    return flask.render_template("table.html", results=results)

@blueprint.route("/add_<record_table>")
def add_record(record_table):
    try:
        form = g.form_list[record_table]
    except Exception as error:
        return flask.render_template("error.html", error=error)

    return flask.render_template("add.html", record_table=record_table, form=form)

@blueprint.route("/save_<new_record_table>", methods=["POST"])
def save_record(new_record_table):
    data = flask.request.form.to_dict()
    del data['submit']
    print(data)
    new_record = g.table_list[new_record_table](**data)
    db.session.add(new_record)
    db.session.commit()
    
    return flask.redirect(flask.url_for("blueprint.index"))
    

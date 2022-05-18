import flask
from flask import Blueprint, request, g, flash
import app
from . import db
from .models import Customer, Order, LineItem, Product, Recipe, Ingredient, Flour
from .forms import CustomerForm, OrderForm, LineItemForm, ProductForm, RecipeForm, IngredientForm, FlourForm, SelectForm, AddItemsToOrderForm

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

@blueprint.route("/show_<table>")
def show_table(table):
    try:
        print(g.table_list[table])
        results = g.table_list[table].query.all()
    except Exception as error:
        return flask.render_template("error.html", error=error)

    return flask.render_template("table.html", results=results, table=table.capitalize())

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

@blueprint.route("/delete")
def delete():
    form = SelectForm()
    return flask.render_template("delete.html", form=form)
    
@blueprint.route("/delete_record", methods=["POST"])
def delete_record():
    data = flask.request.form
    table = g.table_list[data['table_name'].lower()]
    
    try:
        table.query.filter_by(id=data['id']).delete()
        db.session.commit()
    except Exception as error:
        return flask.render_template("error.html", error=error)   
    
    return flask.redirect(flask.url_for("blueprint.index"))

@blueprint.route("/select", methods=["GET", "POST"])
def select():
    form = SelectForm()
    print(form.errors)

    if form.is_submitted():
        try:
            data = flask.request.form
            table = g.table_list[data['table_name'].lower()]
            result = table.query.filter_by(id=data['id']).first()
            print(result)
            flash(result)
        except Exception as error:
            return flask.render_template("error.html", error=error)   
    
    return flask.render_template("select.html", form=form)

@blueprint.route("/order_products", methods=["GET", "POST"])
def add_to_order():
    form = AddItemsToOrderForm()
    print(form.errors)

    if form.is_submitted():
        data = flask.request.form
        product = data['product']
        print(form.product)
        print(int(data['quantity']))
        lineitem = LineItem()
        lineitem.quantity = int(data['quantity'])
        lineitem.order_id = int(data['order_id'])
        lineitem.product_id = int(product)
        db.session.add(lineitem)
        db.session.commit()
        flash('Added!')

    return flask.render_template("add_to_order.html", form=form)
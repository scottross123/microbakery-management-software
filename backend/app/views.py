import flask
from flask import Blueprint, request, g, flash, jsonify
import app
from . import db
from .models import Customer, Order, LineItem, Product, Recipe, Ingredient, Flour
from .forms import CustomerForm, OrderForm, LineItemForm, ProductForm, RecipeForm, IngredientForm, FlourForm, SelectForm
from .utils import serialize, table_list

blueprint = Blueprint('blueprint', __name__, static_folder="static", template_folder='templates')

@blueprint.before_request
def load_utils():
    return

@blueprint.route("/")
def index():
    return flask.render_template("index.html")

@blueprint.route("/show_<table>")
def show_table(table):
    try:
        print(table_list[table])
        results = table_list[table].query.all()
    except Exception as error:
        return flask.render_template("error.html", error=error)

    return flask.render_template("table.html", results=results, table=table.capitalize())

@blueprint.route("/add_<record_table>")
def add_record(record_table):
    try:
        form = form_list[record_table]
    except Exception as error:
        return flask.render_template("error.html", error=error)

    return flask.render_template("add.html", record_table=record_table, form=form)

@blueprint.route("/save_<new_record_table>", methods=["POST"])
def save_record(new_record_table):
    data = flask.request.form.to_dict()
    del data['submit']
    print(data)
    new_record = table_list[new_record_table](**data)
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
    table = table_list[data['table_name'].lower()]
    
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
            table = table_list[data['table_name'].lower()]
            result = table.query.filter_by(id=data['id']).first()
            print(result)
            flash(result)
        except Exception as error:
            return flask.render_template("error.html", error=error)   
    
    return flask.render_template("select.html", form=form)

@blueprint.route("/get_records")
def get_table():
    table = request.args.get("table", type=str)
    print(table)

    records_list = table_list[table].query.all()
    records = []

    for record in records_list:
        records.append(serialize(record))

    return jsonify({'records': records})

@blueprint.route("/get_attribute_types")
def get_types():
    table = request.args.get("table", type=str)

    row = table_list[table].__table__.columns
    types = [column.type.__class__.__name__ for column in row]
    print(types)

    return jsonify({'types': types})
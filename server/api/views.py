import flask
from flask import Blueprint, request, g, flash, jsonify
import api
from . import db
from .models import Customer, Order, LineItem, Product, Recipe, Ingredient, Flour
from .utils import serialize, table_list

blueprint = Blueprint('blueprint', __name__)

@blueprint.before_request
def load_utils():
    return

@blueprint.route("/")
def index():
    return flask.render_template("index.html")

@blueprint.route("/get_records")
def get_table():
    table = request.args.get("table", type=str)

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

@blueprint.route("/save_record")
def save():
    table = request.args.get("table", type=str)

    
import flask
from flask import Flask, Blueprint, request
import app
from .models import Customer

blueprint = Blueprint('blueprint', __name__, static_folder="static", template_folder='templates')

@blueprint.route("/")
def index():
    return flask.render_template("index.html")

@blueprint.route("/<table>")
def show_table(table):
    
    table = eval(table.capitalize())

    try:
        results = table.query.all()
    except Exception as error:
        return flask.render_template("error.html", error=error)

    return flask.render_template("table.html", results=results)
    
    

import flask
from flask import Flask, Blueprint
import app

blueprint = Blueprint('blueprint', __name__, static_folder="static", template_folder='templates')

@blueprint.route("/")
def index():
    return flask.render_template("index.html")
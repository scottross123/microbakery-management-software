import os
from dotenv import load_dotenv
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def create_app():

    app = Flask(__name__)
    from . import views
    app.config.from_object('config.Config')

    from . import models

    db.init_app(app)
    #db.create_all(app=app)

    from .views import blueprint

    app.register_blueprint(blueprint)
   
    return app


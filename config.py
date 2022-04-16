import os
from dotenv import load_dotenv

load_dotenv()

class Config():

    db_url = os.getenv("DATABASE_URL")
    if "postgresql" not in db_url:
        db_url = "postgresql" + db_url[8:]

    # postgre database
    SQLALCHEMY_DATABASE_URI = db_url
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # heroku
    SECRET_KEY = os.getenv("SECRET_KEY")

    # flask config
    DEBUG = True
    TESTING = True

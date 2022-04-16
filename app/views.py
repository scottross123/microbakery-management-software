from Flask import flask

@app.route("/")
def landing():
    flask.render_template("index.html")
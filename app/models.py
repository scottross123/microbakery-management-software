from flask_sqlalchemy import SQLAlchemy

class Customer(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    f_name = db.Column(db.String(100), nullable=False)
    l_name = db.Column(db.String(100), nullable=False)
    phone_num = db.Column(db.String(12), nullable=False)
    orders = db.relationship('Order', backref='customer', lazy=True)

class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    order_time = db.Column(db.DateTime, nullable=False)
    pickup_time = db.Column(db.DateTime, nullable=False)
    # total = db.Column(db.Float, nullable=False)
    customer_id = db.Column(db.Integer, db.ForeignKey('customer.id'), nullable=False)
    lineitems = db.relationship('LineItem', backref='order', lazy=True)

class LineItem(db.Model):
    quantity = db.Column(db.Integer, nullable=False)
    order_id = db.Column(db.Integer, db.ForeignKey('order.id'), primary_key=True, nullable=False) 
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), primary_key=True, nullable=False)  

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(500), nullable=False)
    price = db.Column(db.Float, nullable=False)
    lineitems = db.relationship('LineItem', backref='product', lazy=True)
    recipe = db.relationship('Recipe', backref='product', uselist=False)

recipe_ingredient = db.Table('recipe_ingredient', 
    db.Column(db.Integer, db.ForeignKey('recipe.id')),
    db.Column(db.Integer, db.ForeignKey('ingredient.id'))
)

class Recipe(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    prep_time = db.Column(db.Integer, nullable=False)
    mix_time = db.Column(db.Integer, nullable=True)
    ddt = db.Column(db.Integer, nullable=True)
    bulk_fermentation = db.Column(db.Integer, nullable=True)
    proof = db.Column(db.Integer, nullable=True)
    baking_time = db.Column(db.Integer, nullable=False)
    ingredients = db.relationship('Ingredient', secondary=recipe_ingredient, backref='ingredients', lazy=True)
    product_id = db.Column(db.Integer, db.ForeignKey('product_id'), unique=True)

class Ingredient(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(500), nullable=False)
    cost = db.Column(db.Float, nullable=False)

    __mapper_args__ = {'polymorphic_identity': 'ingredient'}


class Flour(Ingredient):
    id = db.Column(db.Integer, db.ForeignKey('ingredient.id'), primary_key=True, nullable=False, unique=True)
    grain = db.Column(db.String(100), nullable=False)
    protein = db.Column(db.Float, nullable=False)
    extraction = db.Column(db.Integer, nullable=False)
    malted = db.Column(db.Boolean, nullable=False)

    __mapper_args__ = {'polymorphic_identity': 'flour'}


db.create_all()
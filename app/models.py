from . import db
from sqlalchemy.ext.hybrid import hybrid_property

class Customer(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    f_name = db.Column(db.String(100), nullable=False)
    l_name = db.Column(db.String(100), nullable=False)
    phone_num = db.Column(db.String(12), nullable=False)
    customer = db.relationship('Order', backref='customer', lazy=True)

    @hybrid_property
    def name(self):
        return self.f_name + " " + self.l_name

    def __repr__(self):
        return "<Customer(id='%s', f_name='%s', l_name='%s', phone_num='%s')>" % (self.id, self.f_name, self.l_name, self.phone_num)

class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    order_time = db.Column(db.DateTime, nullable=False)
    pickup_time = db.Column(db.DateTime, nullable=False)
    customer_id = db.Column(db.Integer, db.ForeignKey('customer.id'), nullable=False)
    lineitems = db.relationship('LineItem', backref='order', lazy=True)
    orders = db.relationship('Customer', backref='orders', lazy=True)

    def __repr__(self):
        return "<Order(id='%s', order_time='%s', pickup_time='%s', customer='%s')>" % (self.id, self.order_time, self.pickup_time, self.customer)

class LineItem(db.Model):
    quantity = db.Column(db.Integer, nullable=False)
    order_id = db.Column(db.Integer, db.ForeignKey('order.id'), primary_key=True, nullable=False) 
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), primary_key=True, nullable=False)

    def __repr__(self):
        return "<LineItem(id='%s', quantity='%s', order='%s', product='%s')>" % (self.id, self.quantity, self.order, self.product)  

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(500), nullable=False)
    price = db.Column(db.Numeric, nullable=False)
    lineitems = db.relationship('LineItem', backref='product', lazy=True)
    recipe = db.relationship('Recipe', backref='product', uselist=False)

    def __repr__(self):
        return "<Product(id='%s', name='%s', description='%s', price='%s')>" % (self.id, self.name, self.description, self.price)

recipe_ingredient = db.Table('recipe_ingredient', 
    db.Column('recipe_id', db.Integer, db.ForeignKey('recipe.id')),
    db.Column('ingredient_id', db.Integer, db.ForeignKey('ingredient.id'))
)

class Recipe(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    prep_time = db.Column(db.Integer, nullable=False)
    mix_time = db.Column(db.Integer, nullable=False)
    ddt = db.Column(db.Integer, nullable=True)
    bulk_fermentation = db.Column(db.Integer, nullable=True)
    proof = db.Column(db.Integer, nullable=True)
    baking_time = db.Column(db.Integer, nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), unique=True)
    recipes = db.relationship('Ingredient', secondary=recipe_ingredient, backref='recipes', lazy=True)

    def __repr__(self):
        return "<Recipe(id='%s', prep_time='%s', mix_time='%s', ddt='%s', bulk_fermentation='%s', proof='%s', baking_time='%s', product='%s', ingredients='%s')>" % (
            self.id, self.prep_time, self.mix_time, self.ddt, self.bulk_fermentation, self.proof, self.baking_time, self.product, self.ingredients)

class Ingredient(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(500), nullable=False)
    cost = db.Column(db.Numeric, nullable=False)
    ingredients = db.relationship('Recipe', secondary=recipe_ingredient, backref='ingredients', lazy=True)

    __mapper_args__ = {'polymorphic_identity': 'ingredient'}

    def __repr__(self):
        return "<Ingredient(id='%s', name='%s', description='%s', cost='%s', recipes='%s')>" % (self.id, self.name, self.description, self.cost, self.recipes)
    


class Flour(Ingredient):
    id = db.Column(db.Integer, db.ForeignKey('ingredient.id'), primary_key=True, nullable=False, unique=True)
    grain = db.Column(db.String(150), nullable=False)
    protein = db.Column(db.Numeric, nullable=False)
    extraction = db.Column(db.Integer, nullable=False)
    malted = db.Column(db.Boolean, nullable=False)

    __mapper_args__ = {'polymorphic_identity': 'flour'}

    def __repr__(self):
        return "<Ingredient(id='%s', name='%s', description='%s', cost='%s', ingredients='%s')>" % (self.id, self.name, self.description, self.cost, self.ingredients)
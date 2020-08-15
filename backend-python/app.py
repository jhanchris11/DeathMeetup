from flask import Flask, render_template
from flask_restful import Resource,Api
from flask_cors import CORS
from controllers.Rating import Rating

app = Flask(__name__)
api = Api(app)

app.config["MONGO_URI"] = "mongodb+srv://123:123@cluster0-j3ras.mongodb.net/deathMeetup?retryWrites=true&w=majority"

api.add_resource(Rating,'/death-meet/rating')

CORS(app)

if __name__ == "__main__":
    app.run(debug=True)
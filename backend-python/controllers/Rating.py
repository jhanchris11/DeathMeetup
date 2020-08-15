from flask_restful import Resource, reqparse
import sys
sys.path.append("../")
from helpers.ratingHelper import ratingHelper
from services.ratingService import ratingService
from services.eventService import eventService
from webargs.flaskparser import use_args
from webargs import fields
from bson.json_util import dumps, loads 
import pymongo
import json
import pandas as pd
"""lessonRequest = {
    "enlace": "www",
    "categoria": 0,
    "idioma": 1,
    "seguidores": 10,
    "asistencia": 6,
    "comentarios": 10,
    "likes": 21
    
}"""
class Rating(Resource):
    questionRequest = {
        "enlace":fields.String(required=True),
        "categoria":fields.Int(required=True),
        "idioma":fields.Int(required=True),
        "seguidores":fields.Int(required=True),
        "asistencia":fields.Int(required=True),
        "comentarios":fields.Int(required=True),
        "likes":fields.Int(required=True)
       
    }

    @use_args(questionRequest)
    def post(self, request):
        print(request)
        valuesRating = ratingHelper.setRating(request)
        #keysRating = ["enlace", "categoria", "idioma", "seguidores", "asistencia", "comentarios", "rating"]
        #print (valuesRating)
        #print(keysRating)
        #ratingDict = dict(zip(keysRating, valuesRating))
        #print (ratingDict)
        ratingService.insertRating(valuesRating)
        
        return {"message":"rating inserted correctly"}

    def get(self):
        #print("hola")
        all_events = eventService.getEvent()
        #print(all_events) 
        top_rating = dumps(all_events)
        top_rating = json.loads(top_rating)
        #print(top_rating) 
        #print(type(top_rating))
        #print(len(top_rating))
        rating = pd.DataFrame(top_rating)
        drop_columns = ["_id","id","description","createdAt","professor","category","deletedAt","releaseDate","urlImage","urlVideo","user"]
        rating = rating.drop(drop_columns, axis=1)
        rating = rating.fillna(0)
        rating_pred = ratingHelper.setRating(rating["__v"].values.reshape(rating.shape[0],1))
        rating["rating"] = rating_pred
        rating_dict = rating.to_dict()
        rating_top = rating.sort_values('rating').head(5)
        rating_top_dict = rating_top.to_dict("records")
        #print(rating_top_dict)
        #df.to_csv("output.csv", index=False)
        #print(df)
        #print(top_rating[0])
        """all_rating = ratingService.getRating()
                                top_rating = all_rating.sort("rating", pymongo.DESCENDING).limit(3)
                                top_rating = dumps(top_rating)
                                top_rating = json.loads(top_rating)
                                print(type(top_rating[0]))
                                for i in range(0, len(top_rating)):
                                    del top_rating[i]['_id']
                                    del top_rating[i]['categoria']
                                    del top_rating[i]['likes']
                                    del top_rating[i]['seguidores']
                                    del top_rating[i]['asistencia']
                                    del top_rating[i]['comentarios']
                                    del top_rating[i]['id']
                                    del top_rating[i]['idioma']"""
        return {"message":rating_top_dict}
"""a = Rating()
b = a.get(lessonRequest)
print(b)"""
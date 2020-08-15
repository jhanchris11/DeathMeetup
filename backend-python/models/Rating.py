from pymongo import MongoClient, IndexModel
from pymongoext import Model, DictField, StringField, IntField

class Rating(Model):
    @classmethod
    def db(cls):
        return MongoClient('mongodb+srv://123:123@cluster0-j3ras.mongodb.net/deathMeetup?retryWrites=true&w=majority')['deathMeetup']

    __schema__ = DictField(dict(
        enlace=StringField(required=True),
        categoria=IntField(required=True),
        idioma=IntField(required=True),
        seguidores=IntField(required=True),
        asistencia=IntField(required=True),
        comentarios=IntField(required=True),
        likes=IntField(required=True),
        rating=IntField(required=True)
    ))

   #__indexes__ = [IndexModel('enlace', unique=True)]
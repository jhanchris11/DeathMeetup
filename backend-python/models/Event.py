from pymongo import MongoClient, IndexModel
from pymongoext import Model, DictField, StringField, IntField

class events(Model):
    @classmethod
    def db(cls):
        return MongoClient('mongodb+srv://123:123@cluster0-j3ras.mongodb.net/deathMeetup?retryWrites=true&w=majority')['deathMeetup']

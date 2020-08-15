from models.Rating import Rating
from models.Event import events

class eventService():

    @staticmethod    
    def getEvent():
    	return events.find()
    	


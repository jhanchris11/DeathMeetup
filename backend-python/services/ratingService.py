from models.Rating import Rating

class ratingService():
    @staticmethod
    def insertRating(rating):
        Rating.insert_one(rating)

    @staticmethod    
    def getRating():
    	return Rating.find()
    	


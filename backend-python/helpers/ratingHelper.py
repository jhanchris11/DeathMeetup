import os
import pickle

full_path = os.path.dirname(os.path.abspath(__file__))


class ratingHelper:
	@staticmethod
	def setRating(dataframe):

		pkl_filename = os.path.join(full_path, '../rating_model/reg_model.pkl')
		with open(pkl_filename, 'rb') as file:
			pickle_model = pickle.load(file)
		"""final_data = lessonRequest.copy()
								del lessonRequest['enlace']
								#print("final")	
								#print(final_data)  
								row = []
								data = []
								for value in lessonRequest.values():
									if type(value) != str:
										data.append(value)
								row.append(data)
								prediction = pickle_model.predict(row)
								prediction = prediction[0]
								final_data.update({'rating':prediction})
									
								print(final_data)"""
		prediction = pickle_model.predict(dataframe)
		return prediction


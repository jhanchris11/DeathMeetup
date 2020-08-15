import pandas as pd
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split
from sklearn.model_selection import KFold
from sklearn.model_selection import cross_val_score
from sklearn.linear_model import LinearRegression
import pickle

df = pd.read_csv('rating.csv')
df = df.drop("Unnamed: 0", axis=1)
df = df.drop("categoria", axis=1)
df = df.drop("idioma", axis=1)
df = df.drop("seguidores", axis=1)
df = df.drop("asistencia", axis=1)
df = df.drop("comentarios", axis=1)

label_encoder = LabelEncoder()

x = df.drop('rating', axis=1)
y = df['rating']

X_train, X_test, y_train, y_test = train_test_split(x, y, test_size = 0.2, random_state = 0)

k_fold= KFold(n_splits=5, shuffle=True, random_state=0)
reg = LinearRegression().fit(X_train,y_train)
reg.score(X_train,y_train)


pkl_filename = "reg_model.pkl"
with open(pkl_filename, 'wb') as file:
    pickle.dump(reg, file)
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
import joblib

# Load CSV
df = pd.read_csv("sample.csv")

# Convert A–D to numbers
for col in df.columns[:-1]:
    df[col] = df[col].apply(lambda x: ord(x.upper()) - 64)

X = df.drop('level', axis=1)
y = df['level']

model = RandomForestClassifier()
model.fit(X, y)

joblib.dump(model, "random_forest_model.pkl")
print("✅ Model trained and saved as random_forest_model.pkl")

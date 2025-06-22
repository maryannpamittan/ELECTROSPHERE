from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib

app = Flask(__name__)
CORS(app)

model = joblib.load("random_forest_model.pkl")

@app.route("/predict-level", methods=["POST"])
def predict():
    data = request.get_json()
    answers = [ord(data[f'q{str(i).zfill(2)}'].upper()) - 64 for i in range(1, 11)]
    prediction = model.predict([answers])[0]
    return jsonify({"level": prediction})

@app.route("/")
def home():
    return "✅ Hello! The Flask API is running."



if __name__ == "__main__":
    app.run()

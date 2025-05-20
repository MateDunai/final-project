from flask import Flask, render_template, request
from gemini_api import generate_prompt
import os

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def home():
    result = None
    if request.method == "POST":
        topic = request.form.get("topic")
        if topic:
            try:
                result = generate_prompt(topic)
            except Exception as e:
                result = f"Error: {str(e)}"
    return render_template("index.html", result=result)
    

if __name__ == "__main__":
    app.run(debug=True)

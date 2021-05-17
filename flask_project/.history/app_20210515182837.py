from flask import Flask, render_template

app = Flask(__name__)

drinks ={
    'title' : 'Sonder Sparkle Mojito',
    'description': 'A bit of sparkle and cheer come together flawlessly in this festive mocktail.'

}

@app.route("/")
def hello_world():
    return render_template('home.html')

@app.route("/form")
def form():
    return render_template('form.html')
if __name__ == '__main__':
    app.run(debug=True)
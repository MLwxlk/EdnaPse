from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

# Profissional

@app.route('/sobre')
def sobre():
    return render_template('sobre.html')

@app.route('/historico')
def historico():
    return render_template('historico.html')

if __name__ == '__main__':
    app.run(debug=True)
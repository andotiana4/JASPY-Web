from pydoc import render_doc

from flask import Flask, render_template, redirect

Jaspy = Flask(__name__)

@Jaspy.route("/")
def page_1():
    pageName = 'index'
    return render_template("index.html", page="{}".format(pageName))


if __name__=="__main__":
    Jaspy.run(debug = True, port = 8080)
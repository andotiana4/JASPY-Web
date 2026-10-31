import os
import threading
import webbrowser
from flask import Flask, render_template

Jaspy = Flask(__name__)

HOST = "127.0.0.1"
PORT = 8080


@Jaspy.route("/")
def page_1():
    pageName = 'index'
    return render_template("index.html", page="{}".format(pageName))


if __name__ == "__main__":
    
    if os.environ.get("WERKZEUG_RUN_MAIN") == "true":
        threading.Timer(1.0, lambda: webbrowser.open(f"http://{HOST}:{PORT}")).start()

    Jaspy.run(host=HOST, port=PORT, debug=True)

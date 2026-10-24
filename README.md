# 🚀 JASPY-Web

### A Python and JavaScript Web Development Project

**JASPY-Web** is an open-source web development project designed to
bring together Python, Flask, JavaScript, HTML, and CSS in a single
application.

The project explores how frontend technologies can communicate with a
Python backend to create dynamic, interactive, and maintainable web
applications.

JASPY-Web is intended to be a foundation for learning, experimentation,
development, and future expansion. Its long-term vision is to provide
developers with a simple and flexible environment for building web
applications using familiar technologies.

> **JASPY-Web --- Connecting Python and JavaScript for Modern Web
> Development.**

------------------------------------------------------------------------

## 📌 Table of Contents

-   [Introduction](#-introduction)
-   [About JASPY-Web](#-about-jaspy-web)
-   [Project Vision](#-project-vision)
-   [Main Objectives](#-main-objectives)
-   [Features](#-features)
-   [Technologies Used](#-technologies-used)
-   [How It Works](#-how-it-works)
-   [Project Architecture](#-project-architecture)
-   [Project Structure](#-project-structure)
-   [Requirements](#-requirements)
-   [Installation](#-installation)
-   [Running the Application](#-running-the-application)
-   [Frontend and Backend
    Communication](#-frontend-and-backend-communication)
-   [Configuration](#-configuration)
-   [Development Guidelines](#-development-guidelines)
-   [Troubleshooting](#-troubleshooting)
-   [Future Development](#-future-development)
-   [Contributing](#-contributing)
-   [Security](#-security)
-   [License](#-license)
-   [Author](#-author)
-   [Support the Project](#-support-the-project)

------------------------------------------------------------------------

## 🌐 Introduction

Web development often requires several technologies working together.
HTML defines the structure of a page, CSS controls its appearance,
JavaScript provides interactivity, and a backend language processes data
and application logic.

JASPY-Web brings these technologies together through a Python-based web
application using Flask.

The project provides an opportunity to explore the relationship between
browser-based JavaScript and server-side Python. It can also serve as a
starting point for experimenting with APIs, dynamic content, database
integration, file processing, and other web development features.

JASPY-Web is an evolving project, and its architecture and functionality
may grow as development continues.

## 💡 About JASPY-Web

JASPY-Web is a web application project created to explore the
integration of Python and JavaScript.

The backend uses Flask to handle HTTP requests and render HTML
templates. The frontend uses standard web technologies to display
content and provide user interaction.

The project is designed to remain understandable and customizable,
making it suitable for experimentation and further development.

The name **JASPY-Web** represents the project's focus on combining
JavaScript and Python in a web development environment.

## 🎯 Project Vision

The vision of JASPY-Web is to develop a flexible web development project
that makes it easier to experiment with Python and JavaScript working
together.

The project may evolve to include reusable components, improved routing,
API integration, database connectivity, file management, and additional
development tools.

The long-term direction is to explore whether these capabilities can be
organized into a reusable framework or development platform.

The current repository should be considered a work in progress rather
than a finished, feature-complete framework.

## 🏆 Main Objectives

The main objectives of JASPY-Web are:

-   To combine Python and JavaScript in a practical web application.
-   To explore communication between frontend and backend components.
-   To provide a clear starting point for Python web development.
-   To encourage modular and maintainable code.
-   To support experimentation with HTML, CSS, and JavaScript.
-   To provide a foundation for future API development.
-   To explore database connectivity and data processing.
-   To encourage collaboration through open-source development.
-   To make future improvements easier to implement and maintain.

## ✨ Features

The project is built around the following technologies and development
goals.

### 🐍 Python Backend

Python handles the server-side application logic. It can be used to
process requests, validate input, manage data, and implement application
functionality.

### ⚗️ Flask Integration

Flask provides the web application foundation. It supports URL routing,
HTTP request handling, response generation, and HTML template rendering.

### 🌐 HTML Templates

HTML defines the structure of web pages. Flask can render templates and
pass data from Python to the frontend.

### 🎨 CSS Styling

CSS can be used to customize page layouts, typography, colors,
responsive behavior, and the overall user interface.

### ⚡ JavaScript Interactivity

JavaScript enables interactive behavior in the browser. It can respond
to user actions, validate form input, update page content, and
communicate with backend endpoints.

### 🔗 Frontend and Backend Integration

The current repository contains the Flask home route and browser-side JavaScript helpers. API communication can be added through Flask routes and browser requests, but additional API endpoints should not be assumed to exist unless they are implemented in the code.

### 🧩 Extensible Project Structure

The project can be extended with additional modules, templates, static
assets, APIs, and other components as needed.

*Note: The features described here reflect the project's technology
foundation and possible development directions. Specific capabilities
depend on the code currently implemented in the repository.*

## 🛠️ Technologies Used

JASPY-Web uses or is designed around the following technologies:

  Technology   Purpose
  ------------ ----------------------------------------------------------
  Python       Backend programming
  Flask        Web application framework
  JavaScript   Browser-side interactivity
  HTML5        Web page structure
  CSS3         Styling and presentation
  Git          Version control
  GitHub       Source code hosting and collaboration
  Gunicorn     WSGI server option for supported deployment environments

Gunicorn is primarily intended for compatible production environments.
The appropriate server configuration depends on the deployment platform.

## 🔄 How It Works

JASPY-Web follows a common web application architecture.

1.  A user opens the application in a web browser.
2.  The browser sends an HTTP request to the Flask application.
3.  Flask matches the requested URL to an application route.
4.  Python executes the corresponding server-side function.
5.  Flask returns an HTML page or another supported response.
6.  JavaScript can handle user interactions and, where backend endpoints
    are implemented, send additional requests.
7.  The browser displays the resulting content.

This separation helps developers understand the responsibilities of
frontend and backend technologies.

### Example Workflow

``` text
User
 |
 v
Web Browser
 |
 | HTTP Request
 v
Flask Application
 |
 | Python Processing
 v
Response
 |
 v
Web Browser
 |
 v
HTML / CSS / JavaScript
```

This diagram illustrates a typical Flask request-response cycle rather
than every possible internal operation of JASPY-Web.

## 🏗️ Project Architecture

The application can be organized into three main layers.

### 1. Presentation Layer

The presentation layer contains the web pages and browser-side behavior.
Typical technologies include HTML, CSS, JavaScript, and browser APIs.

### 2. Application Layer

The application layer handles server-side logic, including URL routing,
request processing, input validation, response generation, and
application functions. Python and Flask provide the foundation for this
layer.

### 3. Data Layer

The data layer can be introduced when the project requires persistent
storage. Possible technologies include SQLite, PostgreSQL, or MySQL.

Database integration is a potential extension and should not be assumed
to exist until implemented.

## 📁 Project Structure

The following structure shows the main files involved in the current application. Other assets and vendor files may also exist in the repository.

```text
JASPY-Web/
├── JASPY.py
├── requirements.txt
├── README.md
├── templates/
│   └── index.html                 # PROTECTED — do not modify
└── static/
    ├── css/
    │   └── jaspy.css
    ├── img/
    │   └── favicon.png
    ├── js/
    │   ├── index.js               # Home-page entry script
    │   └── jaspy.js               # Typed-text behavior
    ├── src/                       # PROTECTED — do not modify anything here
    │   └── jaspy/
    │       ├── head.js
    │       ├── main.js
    │       ├── jaspy.js
    │       └── jaspy.png
    └── vendor/
        ├── aos/
        └── typed.js/
```

This is a guide to the main paths, not a guarantee that every listed asset is present in every checkout. Check the repository when a particular asset is needed.

### Important Files

- **`JASPY.py`** — Flask application entry point. The current code defines the `/` route, renders `templates/index.html`, passes `page="index"`, and starts the development server on port `8080` with debug mode enabled.
- **`requirements.txt`** — Currently lists Flask and Gunicorn.
- **`templates/index.html`** — The fixed HTML template that loads the protected JavaScript bootstrap and then loads the page script. **Do not modify this file.**
- **`static/src/`** — Protected source directory containing the existing JASPY helper functions and bootstrap scripts. **Do not edit, rename, move, or delete any file or folder inside this directory.**
- **`static/js/index.js`** — The current home-page entry script. It currently calls `Jaspy()`. Preserve this call when adding home-page behavior.
- **`static/js/jaspy.js`** — A separate page script that uses Typed.js to display text from a `.soratana` element's `data-soratra` attribute. This is not the same file as `static/src/jaspy/jaspy.js`.
- **`static/css/`** — Stylesheets served to the browser.
- **`static/vendor/`** — Third-party frontend assets used by the project.
- **`README.md`** — Project documentation.

## 🛑 Protected Files — Do Not Modify

The project has two protected areas. Their code must remain unchanged:

1. **`templates/index.html`** — Do not edit, replace, rename, move, or delete this template.
2. **Everything inside `static/src/`** — Do not edit, replace, rename, move, or delete any file or subdirectory in this folder. This includes `static/src/jaspy/head.js`, `static/src/jaspy/main.js`, `static/src/jaspy/jaspy.js`, images, and any other current or future files under `static/src/`.

These files form the existing application bootstrap and contain helper functions used by the project. Use the available functions from page-specific scripts instead of changing their definitions.

### Where to put new code

- Put home-page-specific JavaScript in **`static/js/index.js`**.
- Preserve the existing `Jaspy();` startup call in `static/js/index.js`; add new page-specific code without removing or replacing it.
- Other page scripts may be placed under `static/js/` when a corresponding Flask route passes the correct page name to the template.
- Put styles in `static/css/` where possible.
- Put server-side logic in `JASPY.py` or another Python module imported by the Flask application.

Do not copy protected helper functions into `index.js` just to change their implementation. If a helper needs different behavior, implement page-specific behavior around it or document the proposed change separately; do not edit the protected source files.

## 🔄 How It Works

The current application flow is:

1. A visitor opens the application in a browser.
2. Flask handles the `/` route in `JASPY.py`.
3. Flask renders `templates/index.html` and passes `page="index"`.
4. The template loads `static/src/jaspy/head.js` and `static/src/jaspy/main.js`.
5. The template creates a script element for `static/js/index.js` using the `page` value supplied by Flask.
6. `static/js/index.js` calls `Jaspy()`, a function defined in the protected `static/src/jaspy/main.js` file.
7. The JASPY scripts create the initial interface and load additional page behavior.

The template and `static/src/` files are the fixed bootstrap for this project. Keep them unchanged when adding features.

## 🧩 JavaScript Functions and Page Scripts

### Existing helper functions

The protected `static/src/jaspy/main.js` currently defines DOM helpers and interface functions, including:

- `Create_Element_simple_after_root()`
- `Create_Element_text_after_root()`
- `Create_Element_after_root()`
- `Create_other_Element()`
- `Create_other_Element_text()`
- `Set_Attribut()`
- `Add_Text()`
- `Add_ClassById()` and `Add_ClassByTag()`
- `Jaspy()`
- `create_landing_page()`
- `create_portfolio()`
- `create_business_website()`
- `create_navigator()`
- `create_section()`
- `Model_portfolio()`
- `export_website()`

These functions are already defined in the protected source directory. Call them from page scripts when appropriate; do not modify their definitions.

### `static/js/index.js`

At present, the home-page entry script contains:

```javascript
Jaspy();
```

Keep this startup call. New home-page functions or calls can be added to this file, provided the existing startup behavior is preserved and the functions are called only when their required DOM elements and arguments are available.

For example, a separate function can be added as follows:

```javascript
function showWelcomeMessage() {
    console.log("Welcome to JASPY-Web!");
}

// Keep the existing JASPY startup call.
Jaspy();

// Example page-specific behavior.
showWelcomeMessage();
```

This is only an example; it does not replace the current project code. When using a helper such as `create_navigator()`, ensure that its container element exists and pass the required arguments.

### `static/js/jaspy.js`

This separate script reads the `data-soratra` attribute from an element with the `.soratana` class and uses Typed.js to animate the text. Do not confuse it with the protected `static/src/jaspy/jaspy.js` file.

### Browser JavaScript and server-side Python

Files under `static/js/` run in the visitor's browser. Flask serves those files; it does not execute their ordinary JavaScript functions on the Python server.

Server-side logic belongs in `JASPY.py` or another Python module imported by the Flask application. If browser code needs server-side data, add a Flask route or API endpoint and request it from JavaScript. The current `JASPY.py` defines only the `/` route, so additional API routes should not be assumed to exist.

## 💻 Requirements

Before running JASPY-Web locally, make sure the following requirements
are satisfied:

-   A compatible version of Python is installed.
-   Git is available if you want to clone the repository.
-   A terminal or command prompt is available.
-   A web browser is available.
-   The project's Python dependencies can be installed.
-   The required project files are present.

The exact Python version requirement should be documented once it has
been tested and confirmed.

## 📥 Installation

### Step 1: Clone the Repository

``` bash
git clone https://github.com/andotiana4/JASPY-Web.git
```

### Step 2: Open the Project Directory

``` bash
cd JASPY-Web
```

### Step 3: Create a Virtual Environment

On Windows:

``` bash
python -m venv .venv
```

On Linux or macOS:

``` bash
python3 -m venv .venv
```

A virtual environment keeps project dependencies separate from packages
installed for other Python projects.

### Step 4: Activate the Virtual Environment

**Windows Command Prompt:**

``` bat
.venv\Scripts\activate.bat
```

**Windows PowerShell:**

``` powershell
.\.venv\Scripts\Activate.ps1
```

**Linux or macOS:**

``` bash
source .venv/bin/activate
```

### Step 5: Install Dependencies

``` bash
python -m pip install --upgrade pip
pip install -r requirements.txt
```

If the repository's dependency file is missing or incomplete, install
only the dependencies required by the current application and update
`requirements.txt` accordingly.

## ▶️ Running the Application

Install the dependencies, then run:

```bash
python JASPY.py
```

The current `JASPY.py` configures Flask to use port `8080`. Open this address in your browser:

```text
http://127.0.0.1:8080
```

The current code enables `debug=True`, which is intended only for local development. Do not expose Flask's debug server to the public internet or use debug mode in production.

## 🔌 Frontend and Backend Communication

One of the important concepts explored by JASPY-Web is the relationship
between JavaScript and Python.

JavaScript runs in the user's browser, while Python typically runs on
the server. These environments cannot directly call each other's
ordinary functions as though they were in the same process. They
communicate through mechanisms such as HTTP requests, HTML form
submissions, and API endpoints.

For example, JavaScript can send a request using the Fetch API:

``` javascript
fetch("/api/example")
  .then(response => {
    if (!response.ok) {
      throw new Error("Request failed");
    }

    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("Error:", error);
  });
```

This example requires a corresponding `/api/example` endpoint in the
Python application that returns a JSON response. It is an illustration
of a possible integration, not a claim that this endpoint already exists
in JASPY-Web.

## ⚙️ Configuration

Configuration should be kept clear and easy to maintain.

Depending on the project's needs, future configuration options may
include:

-   Application host and port
-   Development and production modes
-   Database connection settings
-   Logging configuration
-   Environment variables
-   External service credentials

Sensitive values such as passwords, API keys, and database credentials
should not be committed to the public repository.

For production deployments, avoid enabling Flask debug mode.

## 🧪 Testing and Quality

Testing helps ensure that the application behaves as expected.

Possible future testing areas include:

-   Route response tests
-   Template rendering tests
-   Form validation tests
-   API endpoint tests
-   Error handling tests
-   Dependency compatibility checks

Automated testing can be introduced using Python testing tools such as
`pytest`. Tests should reflect the actual functionality implemented in
the application.

## 🧹 Development Guidelines

To keep the project maintainable:

-   Use meaningful variable and function names.
-   Keep functions focused on specific responsibilities.
-   Separate static assets and backend logic where possible.
-   Do not modify `templates/index.html` or anything inside `static/src/`.
-   Preserve the `Jaspy();` startup call in `static/js/index.js`.
-   Avoid duplicating code unnecessarily.
-   Validate user input on the server.
-   Handle errors consistently.
-   Keep dependencies documented.
-   Avoid committing virtual environments and cache directories.
-   Document new features and configuration changes.
-   Test changes before submitting them.

## 🐛 Troubleshooting

### Python Is Not Recognized

If the terminal reports that Python is not recognized, verify that
Python is installed and available through the system PATH.

You may also try this command on Windows:

``` bash
py --version
```

### Flask Cannot Be Imported

Activate the virtual environment and install the project dependencies:

``` bash
python -m pip install -r requirements.txt
```

### The Application Cannot Find a Template

Check that the required HTML file exists in the `templates/` directory
and that the filename matches the name used in `render_template()`.

### Static Files Are Missing

Verify that CSS, JavaScript, and image files exist at the paths referenced by the application. Do not edit `templates/index.html` or files under `static/src/` to work around a missing asset; first check the path and the page-specific files under `static/js/` or `static/css/`.

### The Local Address Does Not Open

Confirm that the application started successfully, that the configured
port matches the URL, and that no other process is preventing the server
from starting.

## 🗺️ Future Development

JASPY-Web is an evolving project. Potential development directions
include:

-   Improving project organization and documentation.
-   Expanding frontend and backend communication.
-   Introducing additional API endpoints.
-   Adding database support.
-   Improving input validation and error handling.
-   Creating reusable application components.
-   Supporting configuration through environment variables.
-   Adding automated tests.
-   Improving deployment documentation.
-   Exploring packaging options for easier distribution.
-   Evaluating whether reusable framework features are appropriate for
    the project.

These items represent possible future work and are not necessarily
available in the current version.

## 🤝 Contributing

Contributions, suggestions, bug reports, and documentation improvements
are welcome.

If you want to contribute:

1.  Fork the repository.
2.  Create a branch for your changes.
3.  Implement and test your changes.
4.  Commit your work with a clear message.
5.  Push your branch to your fork.
6.  Open a pull request describing your contribution.

Please keep contributions focused, explain important changes, and
include relevant testing information when possible. Contributions must
respect the protected-file rule: do not modify `templates/index.html` or
any file or folder inside `static/src/`. Preserve the `Jaspy();` call in
`static/js/index.js`.

## 🔐 Security

Security is an important consideration for web applications.

When developing or deploying JASPY-Web:

-   Never publish passwords, tokens, or private keys.
-   Validate user input on the server.
-   Keep dependencies updated.
-   Disable debug mode in production.
-   Configure production servers appropriately.
-   Use HTTPS when deploying publicly.
-   Review access permissions before exposing sensitive functionality.

If you discover a security issue, avoid publishing sensitive exploit
details before the issue can be addressed.

## 📄 License

The project's license should be specified in a `LICENSE` file.

Until a license is added, users should not assume that the repository is
available for unrestricted redistribution or reuse.

If you plan to distribute JASPY-Web as an open-source project, choose a
license that reflects your intentions and add the appropriate license
file.

## 👨‍💻 Author

**Ando Tiana**

GitHub Profile: https://github.com/andotiana4

Project Repository: https://github.com/andotiana4/JASPY-Web

## ⭐ Support the Project

If you find JASPY-Web interesting, consider supporting its development.

You can help by:

-   Giving the repository a star.
-   Reporting bugs.
-   Suggesting improvements.
-   Improving the documentation.
-   Testing the application.
-   Contributing code.
-   Sharing the project with other developers.

Every constructive contribution can help the project improve over time.

## 📬 Feedback

Feedback and suggestions are valuable for identifying improvements and
guiding future development.

If you have ideas for new features, improvements, or documentation,
please use the repository's GitHub Issues or pull request workflow where
appropriate.

------------------------------------------------------------------------

**JASPY-Web --- Exploring the Connection Between Python and
JavaScript.**

*Built for experimentation, learning, and continuous development.*

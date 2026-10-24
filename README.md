# 🚀 JASPY-Web

### Python, Flask, and JavaScript Web Project

JASPY-Web combines Flask on the server side with JavaScript in the
browser. This README describes the current project structure and
explains how to extend it without breaking the existing loading
mechanism.

> **The code snippets in this README are examples. They do not replace
> the existing project code.**

## 🔒 Important Rules

### Protected files

-   `templates/index.html` is protected and must not be modified.
-   **The entire `static/src/` directory is protected. Do not modify,
    move, rename, or delete any file inside it.**

To add features, use `static/js/index.js` to call the existing helper
functions and write page-specific logic. Other permitted CSS,
JavaScript, or Python files may be changed when necessary, while
preserving the existing architecture.

### `Jaspy();` is optional

`Jaspy();` is a function call that launches the presentation provided by
the project. **It is not mandatory or fixed, and it can be removed** if
you do not want to display that presentation. It does not represent all
JASPY-Web functionality.

Functions defined in `static/src/jaspy/head.js` and
`static/src/jaspy/main.js` can be called independently from
`static/js/index.js`, depending on what the page needs. Do not edit the
files where these functions are defined; reuse them instead.

An example is a demonstration, not a reason to replace an entire
existing project file.

## 📁 Main Project Structure

``` text
JASPY-Web/
├── JASPY.py                     # Flask application and / route
├── requirements.txt             # Python dependencies
├── README.md
├── templates/
│   └── index.html               # PROTECTED — do not modify
└── static/
    ├── css/
    │   └── jaspy.css
    ├── img/
    │   └── favicon.png
    ├── js/
    │   ├── index.js             # JavaScript entry point for the page
    │   └── jaspy.js             # Presentation text animation
    ├── src/                     # PROTECTED — do not modify anything here
    │   └── jaspy/
    │       ├── head.js          # Helpers for configuring the <head>
    │       ├── main.js          # DOM helpers and components
    │       ├── jaspy.js         # Project presentation
    │       └── jaspy.png
    └── vendor/
        ├── aos/
        └── typed.js/
```

This is a simplified view of the main files, not an exhaustive
inventory. Check the repository to confirm whether a particular resource
is present.

### File responsibilities

  -----------------------------------------------------------------------
  File                                Responsibility
  ----------------------------------- -----------------------------------
  `JASPY.py`                          Creates the Flask application and
                                      defines the `/` home route.

  `templates/index.html`              Protected template that loads the
                                      core scripts and the page script.

  `static/src/jaspy/head.js`          Utility functions related to the
                                      document title, scripts, links, and
                                      favicon.

  `static/src/jaspy/main.js`          Functions for creating DOM
                                      elements, adding text, setting
                                      attributes, and building
                                      components.

  `static/js/index.js`                Entry point for calling core
                                      helpers and writing page-specific
                                      logic.

  `static/js/jaspy.js`                Text-animation behavior associated
                                      with the presentation.

  `static/css/jaspy.css`              Project styles.

  `requirements.txt`                  Python dependencies.
  -----------------------------------------------------------------------

## 🔄 How the Page Loads

1.  The browser requests `/`.
2.  Flask renders `templates/index.html` with `page="index"`.
3.  The template loads `static/src/jaspy/head.js` and
    `static/src/jaspy/main.js`.
4.  The template uses its existing mechanism to load
    `static/js/index.js`.
5.  `static/js/index.js` calls the functions needed by the page.
6.  If the project presentation is wanted, `static/js/index.js` can call
    `Jaspy();`.

The loading mechanism already exists in the template. **Do not add new
script tags by modifying `templates/index.html`**, because that file is
protected.

## 🧩 Using `static/js/index.js`

This is the preferred place to call functions defined in `head.js` and
`main.js`. For example, `head.js` includes helpers such as `title(...)`,
`h_script(...)`, `link(...)`, and `icon(...)`. `main.js` includes DOM
helpers such as `Create_Element_after_root(...)`,
`Create_other_Element(...)`, `Create_other_Element_text(...)`,
`Set_Attribut(...)`, and `Add_Text(...)`, as well as component and
utility functions such as `create_navigator(...)`,
`create_section(...)`, `create_landing_page(...)`,
`create_portfolio(...)`, `create_business_website(...)`,
`export_website(...)`, and `Model_portfolio(...)`.

This list is indicative, not a replacement for the function definitions.
To confirm the exact arguments and their order, inspect the existing
protected files in read-only mode.

### Example initialization structure

The following snippet illustrates one possible structure for
`static/js/index.js`. The demonstration calls are commented out: adapt
them to the needs of your page instead of replacing the entire file.

``` javascript
function initPage() {
    // Helpers from head.js, if needed:
    // title("My JASPY-Web page");

    // Helpers from main.js, if needed:
    // create_navigator("root", "JASPY WEB", []);

    // Optional: show the project presentation.
    // Jaspy();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPage, { once: true });
} else {
    initPage();
}
```

This initialization pattern can help prevent helpers from being called
too early. If the file already has an initialization routine, adapt it
instead of adding a second independent startup sequence.

## 🧭 Containers and Helper Arguments

Before using a function that accepts a `containerId`, make sure the
corresponding element exists. For example, the ID `"root"` must match an
element in the document. The current template assigns `root` to the
`body`; leave the template unchanged.

The current `create_navigator` function signature is:

``` javascript
create_navigator(containerId, brandName, links = [])
```

-   `containerId`: ID of the container in which to create the
    navigation.
-   `brandName`: brand name displayed in the navigation.
-   `links`: list of links. Check the function's implementation for the
    exact object or value format it expects before supplying items.

A cautious example to add inside `initPage()` if a navigation bar is
needed:

``` javascript
const container = document.getElementById("root");

if (container) {
    create_navigator("root", "JASPY WEB", []);
} else {
    console.error('JASPY-Web: container "root" was not found.');
}
```

An empty list is used here to avoid assuming a link format that has not
been verified. Before adding links, inspect the definition of
`create_navigator()`. The helper uses fixed HTML IDs, so multiple calls
may create duplicate IDs; avoid creating the same navigation component
more than once.

### Script loading order

If the browser console reports `function is not defined`, inspect the
actual execution order in the browser developer tools. Confirm that
`head.js`, `main.js`, and `static/js/index.js` loaded successfully and
that the required function is available before it is called. Do not
change protected files to work around the issue before checking the
errors and network requests.

## 📦 Requirements and Installation

Requirements: Python, `pip`, a modern browser, and the repository's
referenced static assets.

Clone the repository:

``` bash
git clone https://github.com/andotiana4/JASPY-Web.git
cd JASPY-Web
```

Create a virtual environment if desired.

**Windows:**

``` bash
py -m venv .venv
.venv\Scripts\activate
```

**Linux / macOS:**

``` bash
python3 -m venv .venv
source .venv/bin/activate
```

Install the declared dependencies:

``` bash
python -m pip install -r requirements.txt
```

The current `requirements.txt` includes Flask and Gunicorn. Gunicorn is
intended for compatible deployment environments; it is not required for
the local development command below.

## ▶️ Run the Application

From the repository root, run:

``` bash
python JASPY.py
```

The current code configures Flask to use port `8080`. Open:

``` text
http://127.0.0.1:8080
```

The current code enables `debug=True`. This is suitable only for local
development: do not expose Flask's development server or debugger to the
public internet, and disable debug mode in production.

## 🐛 Troubleshooting

### A function is not defined

-   Check the browser console.
-   Use the Network tab to verify that scripts load successfully.
-   Check execution order and function availability.
-   Verify the arguments and that the target container exists.
-   Do not modify `templates/index.html` or anything inside
    `static/src/`.

### The page is blank or an element is missing

-   Look for JavaScript errors.
-   Confirm that the `containerId` exists.
-   Check the order and number of function calls.
-   Verify that CSS and external resources load correctly.

### `static/js/index.js` does not load

The home route currently passes `page="index"`, so the template expects
`static/js/index.js`. Check the filename, capitalization, and any 404
errors in the Network tab without modifying the protected template.

### The presentation does not appear

`Jaspy();` is the call that launches the provided presentation. If you
want to show it, make sure it is called from `static/js/index.js` and
check that its associated resources are available. If you do not want
the presentation, you can omit this call.

## 🔐 Security

-   Do not expose Flask's development server or debugger publicly.
-   Disable debug mode in production and use an appropriate WSGI server.
-   Avoid inserting untrusted data with `innerHTML`; use `textContent`
    for plain text.
-   Validate user-provided inputs and URLs.
-   Never commit passwords, tokens, or secret keys.

Functions that build HTML from supplied values must be used carefully.
Validate untrusted data before passing it to them.

## 🤝 Contribution Rules

1.  Do not modify `templates/index.html`.
2.  Do not modify, move, rename, or delete any file in `static/src/`.
3.  Put calls to helpers from `head.js` and `main.js` in
    `static/js/index.js`.
4.  Keep `Jaspy();` only if the presentation is wanted; the call is
    optional.
5.  Check each helper's required container and arguments.
6.  Test locally and inspect the browser console and network requests.
7.  Keep this README consistent with the code actually in the
    repository.

## 👨‍💻 Author and Repository

-   **Author:** Ando Tiana
-   **GitHub profile:** https://github.com/andotiana4
-   **Repository:** https://github.com/andotiana4/JASPY-Web

------------------------------------------------------------------------

**JASPY-Web --- Python and JavaScript for web development.**

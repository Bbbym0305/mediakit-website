# MediaKit Galvaniseren — Portfolio Website

A clean portfolio website to showcase your galvanizing projects to customers.

---

## How to update projects

Open **`projects.js`** in any text editor (Notepad works fine).

Each project looks like this:

```js
{
  title:    "NAME OF PROJECT IN CAPS",
  subtitle: "Short description line",
  category: "Infrastructuur",   // must match a value from CATEGORIES list
  subject:  "Constructie",      // must match a value from SUBJECTS list
  region:   "West-Nederland",   // must match a value from REGIONS list
  image:    "images/my-photo.jpg", // put your photo in the images/ folder
  link:     "#",                // or a URL to a details page
},
```

### Steps to add a new project

1. Put your photo in the `images/` folder.
2. Copy one of the existing project blocks in `projects.js`.
3. Change the values to match your new project.
4. Save the file — refresh the website to see the change.

### Steps to remove a project

Delete the entire `{ ... },` block for that project in `projects.js`.

---

## Adding your own placeholder images

Open `generate-placeholders.html` in your browser once — it will automatically
download 9 coloured placeholder images. Move them into the `images/` folder.

---

## File overview

| File | Purpose |
|------|---------|
| `index.html` | The main page structure (no need to edit) |
| `style.css` | All visual styling (no need to edit) |
| `script.js` | Filter logic and card rendering (no need to edit) |
| `projects.js` | **Your projects data — edit this** |
| `images/` | Put all your project photos here |

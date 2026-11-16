# Portfolio site

This folder contains a Jekyll site for GitHub Pages. GitHub builds the site automatically. You do not need to install anything.

## Folder structure

| Path | Purpose |
|---|---|
| `_config.yml` | Name, headline, email, LinkedIn, and résumé link for all pages. |
| `_projects/` | One Markdown file for each project. |
| `_includes/header.html` | Menu for all pages. |
| `_includes/footer.html` | Contact section for all pages. |
| `_layouts/project.html` | Template for each project page. |
| `index.html` | Home page. |
| `about.html` | About page. |
| `assets/css/style.css` | Colors, fonts, and layout. |
| `assets/images/` | Project images. |

## Publish the site

1. Create a public repository with the name `yourusername.github.io`.
2. Upload all files and folders in this folder to the repository.
3. Go to **Settings → Pages**.
4. Set **Source** to **Deploy from a branch**, then select `main` and `/ (root)`.
5. Wait 1–2 minutes, then open `https://yourusername.github.io`.

## Change your details

1. Open `_config.yml`.
2. Change `email`, `linkedin`, and `headline`.
3. Commit the change. GitHub updates all pages.

## Add your résumé

1. Save your résumé as `resume.pdf`.
2. Upload it to `assets/`.

## Add a project

1. Copy a file in `_projects/`, for example `01-prosthetic-grip.md`.
2. Give the new file a new name. The number at the start sets the order.
3. Change the values at the top of the file (the front matter).
4. Set `category` to `college` or `personal`.
5. Upload a photo to `assets/images/`, then set `image` to its path.
6. Write the case study text below the second `---` line.

The home page shows the new project automatically.

## Remove an example project

Delete its file in `_projects/` and its image in `assets/images/`.

## Front matter fields

| Field | Required | Description |
|---|---|---|
| `title` | Yes | Project name. |
| `category` | Yes | `college` or `personal`. |
| `summary` | Yes | One sentence for the card and the page header. |
| `role` | Yes | The work you owned. |
| `team` | Yes | Team size. |
| `timeline` | Yes | Course or context, and the year. |
| `tools` | Yes | List of tools, for example `[SolidWorks, CNC]`. |
| `image` | Yes | Path to the main image. |
| `status` | No | Label for personal projects, for example `In progress`. |
| `results` | No | List of key numbers. Each item has `value` and `label`. |

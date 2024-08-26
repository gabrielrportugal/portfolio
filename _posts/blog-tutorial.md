---
title: "How to Create a Blog Using .md Files in Next.js"
description: "Learn how to set up a blog using markdown (.md) files in your Next.js portfolio."
banner: "/images/blog-setup.jpeg"
tags: ["Next.js", "Markdown", "Blog"]
date: 26 August 2024
ready: true
---

### Step 1: Create the \_posts folder

Start by creating a **\_posts** folder in your project. This is where all the markdown (.md) files for your blog posts will be stored.

### Step 2: Write your blog post in a markdown file

Create a new markdown file inside the **\_posts** folder. The file name will serve as the slug for accessing the post. For example, if you name the file **my-first-post.md**, the URL for accessing it will be **/blog/my-first-post**.

Each markdown file should include metadata at the top, which could look something like this:

```md
---
title: "My First Post"
description: "This is my first blog post."
banner: "/blog/images/my-first-post.jpeg"
tags: ["Next.js", "Markdown"]
date: 26 August 2024
---
```

### Step 3: List all blog posts

In this step, we will display all blog posts on a single page. To do this, ensure that your **/blog** page reads all markdown files from the **\_posts** folder and renders a list of all the posts.

For each blog post, you can display the title, description, date, and a link to the full post. This allows visitors to easily browse through all your content in one place.

### Step 4: Add images to your blog posts

If you want to enhance your blog posts with images, you can do so by placing the images in the **public/blog/images** folder. This will make the images accessible through your blog's public URL.

When referencing images in your markdown file, use the following syntax:

```md
![Image description](/blog/images/your-image-name.jpeg)

### Run the project to verify

If you want to test the project locally

```sh
yarn dev
```

and go to **http://localhost:3000/sample-blog** to see the fruits of your labor!


### Technologies Used

- NextJS
- Chakra UI CSS
- Typescript
- Markdown
- Syntax Highlighter

### Features

- Showing blog posts by parsing markdown
- Syntax highlight with PrismJS
- SEO setup
- Dark mode support with next-themes
- Type checking TypeScript
- Linter with ESLint
- Code Formatter with Prettier

### Github Repo

[Repo here](https://github.com/gabrielrportugal/portfolio)

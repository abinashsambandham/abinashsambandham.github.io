# abinashsambandham.github.io

Personal portfolio built with Next.js, TypeScript and Tailwind CSS, exported as a static site and hosted on GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit content

All text (intro, stats, projects, experience, skills, links) lives in `data/content.ts`.
To replace the resume, swap the PDF in `public/` and update `profile.resume` if the file name changes.

If the site moves to a custom domain, change `site.url` in `data/content.ts`; the canonical URL, sitemap, robots file and structured data all follow it.

## Portrait and link preview

The hero serves `public/abinash-portrait-*.avif` with JPEG fallbacks. After replacing the photo, regenerate them (macOS):

```bash
sips -s format avif -s formatOptions 60 public/abinash-portrait.jpg --out public/abinash-portrait-974.avif
sips -s format avif -s formatOptions 60 --resampleWidth 560 public/abinash-portrait.jpg --out public/abinash-portrait-560.avif
sips -s format jpeg -s formatOptions 78 --resampleWidth 560 public/abinash-portrait.jpg --out public/abinash-portrait-560.jpg
```

`app/opengraph-image.png` and `app/twitter-image.png` are the 1200×630 card shown when the link is shared. They are static images, so redo them if the photo, name or title changes.

## Analytics

Analytics are off by default. To turn on [GoatCounter](https://www.goatcounter.com) (free, no cookies), create a site there and put its code in `site.goatcounter` in `data/content.ts`.

## Deploy

1. Create a public GitHub repository named `abinashsambandham.github.io`.
2. Push this folder to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/abinashsambandham/abinashsambandham.github.io.git
   git push -u origin main
   ```
3. In the repository, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
4. Every push to `main` builds and deploys the site to https://abinashsambandham.github.io.

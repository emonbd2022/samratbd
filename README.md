# Afsar Uddin Chemical Co. Website

This is a professional company website built with React, Vite, and Tailwind CSS.

## Project Structure

```
/src
  /components
    Layout.tsx       # Main layout (Navbar + Footer)
    SEO.tsx          # SEO meta tags component
    ScrollToTop.tsx  # Scroll restoration component
  /pages
    Home.tsx         # Landing page
    About.tsx        # Company information
    Products.tsx     # Product catalogue
    Process.tsx      # Manufacturing process
    Gallery.tsx      # Photo gallery
    Videos.tsx       # Video gallery
    Distributors.tsx # Distributor application form
    Contact.tsx      # Contact information and form
  App.tsx            # Main application component with routing
  main.tsx           # Entry point
  index.css          # Global styles and Tailwind configuration
```

## Getting Started

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```

3.  **Build for production:**
    ```bash
    npm run build
    ```

## How to Add YouTube Videos

To add or change YouTube videos in the `Videos` page or `Process` page:

1.  Open `src/pages/Videos.tsx` or `src/pages/Process.tsx`.
2.  Locate the `videos` array or the `iframe` src.
3.  Replace the video ID (e.g., `dQw4w9WgXcQ`) with your own YouTube video ID.
    *   The ID is the part after `v=` in the YouTube URL (e.g., `https://www.youtube.com/watch?v=YOUR_ID_HERE`).

## Deployment to Vercel

This project is optimized for Vercel deployment.

1.  **Push to GitHub:**
    *   Initialize a git repository: `git init`
    *   Add files: `git add .`
    *   Commit: `git commit -m "Initial commit"`
    *   Push to a new GitHub repository.

2.  **Deploy on Vercel:**
    *   Go to [Vercel Dashboard](https://vercel.com/dashboard).
    *   Click "Add New..." -> "Project".
    *   Import your GitHub repository.
    *   Vercel will automatically detect the Vite framework settings.
    *   Click "Deploy".

Your website will be live in minutes!

## SEO Configuration

To update SEO meta tags:

1.  Open any page component (e.g., `src/pages/Home.tsx`).
2.  Update the `<SEO />` component props:
    ```tsx
    <SEO 
      title="Page Title" 
      description="Page description for search engines."
      keywords="keyword1, keyword2"
    />
    ```

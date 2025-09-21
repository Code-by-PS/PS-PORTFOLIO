# Personal Portfolio Website

Hey! I'm Panashe Sanyanga, a Computer Science student who's really excited about becoming a Software Engineer. This is my portfolio website where I showcase my projects and share what I've learned along the way.

**Live Demo:** [View my portfolio live](https://code-by-ps.github.io/PS-PORTFOLIO)

## What This Is

This is my personal portfolio website that I built to showcase my projects and skills. It's a responsive website with a clean design, interactive elements, and some cool animations. I built this after getting better at HTML, CSS, and JavaScript, and I'm pretty proud of how it turned out!

**Fun fact:** I spent way too much time getting the floating card effects to work properly, only to realize later that they were covering my buttons! Classic CSS debugging moment 🤦‍♂️

## What I Built

- **Responsive Design**: Works on phones, tablets, and computers
- **Interactive Elements**: Hover effects, smooth scrolling, and button animations
- **Project Showcase**: Displays my 4 main projects with live demos and GitHub links
- **About Section**: Personal story, career goals, and detailed project insights
- **Contact Form**: Simple form that opens your email client (no backend needed!)
- **Dark Theme**: Because dark themes are just better, right?
- **Smooth Animations**: Floating orbs, card hover effects, and transitions

## Technologies I Used

### Frontend (What users see)

- **HTML5**: For the structure and content
- **CSS3**: For styling, animations, and responsive design (I used Flexbox and Grid)
- **JavaScript (ES6+)**: For interactivity and smooth user experience
- **Google Fonts**: Anton for headers, Roboto for body text

### Key Features I Implemented

- **CSS Custom Properties**: For consistent theming and easy color changes
- **Responsive Grid Layout**: Project cards that adapt to different screen sizes
- **Smooth Scrolling**: Navigation and button interactions
- **Form Handling**: Contact form with email client integration
- **Interactive Buttons**: GitHub and Live Demo links with visual feedback

## Project Structure

```
PS-PORTFOLIO/
├── index.html          # Main homepage
├── projects.html       # Detailed projects page
├── about.html          # About me and project insights
├── contact.html        # Contact form
├── styles.css          # All the styling and animations
├── script.js           # JavaScript for interactivity
├── images/             # Images and icons
│   └── favicon.ico
└── README.md           # This file!
```

## How to Run It

### Option 1: GitHub Pages (Recommended)

1. Fork this repository
2. Go to Settings → Pages
3. Select "Deploy from a branch" → main branch
4. Your site will be live at `https://your-username.github.io/PS-PORTFOLIO`

### Option 2: Local Development

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/PS-PORTFOLIO.git
   cd PS-PORTFOLIO
   ```

2. Open `index.html` in your browser or use a local server:

   ```bash
   # Using Python (if you have it installed)
   python -m http.server 8000

   # Using Node.js (if you have it installed)
   npx serve .
   ```

3. Open `http://localhost:8000` in your browser

## Customization

Want to use this as a template for your own portfolio? Here's how to customize it:

### 1. Update Personal Information

- Edit the hero section in `index.html`
- Update the About section in `about.html`
- Change contact details in `contact.html`

### 2. Add Your Projects

- Replace project cards in `index.html` and `projects.html`
- Update the timeline section with your own journey
- Add your own project insights in `about.html`

### 3. Customize Colors and Styling

- Modify CSS custom properties in `styles.css`:
  ```css
  :root {
    --bg-dark: #f9fafb; /* Background color */
    --accent-color: #0077cc; /* Primary color */
    --text-primary: #1a1a1a; /* Text color */
    /* ... other colors */
  }
  ```

### 4. Update Links

- Replace GitHub repository links with your own
- Update social media links in the contact section
- Add your own live demo URLs

## What I Learned

Building this portfolio taught me a lot about web development:

- **CSS Layout**: Flexbox and Grid for responsive design
- **JavaScript DOM Manipulation**: Making interactive elements work
- **Responsive Design**: Making websites work on all devices
- **Performance Optimization**: Efficient CSS and smooth animations
- **User Experience**: Making navigation intuitive and engaging
- **Debugging Skills**: Spending hours figuring out why buttons weren't clickable (spoiler: z-index issues!)

**Biggest challenge:** Getting the floating card animations to work without breaking the button functionality. I learned that sometimes the coolest effects can cause the most problems!

## Code Comments

I tried to comment my code well so you can understand what's happening:

- **HTML**: Section headers and component explanations
- **CSS**: Layout explanations and responsive breakpoints
- **JavaScript**: Function purposes and debugging notes

The comments explain:

- How the responsive design works
- Why I made certain layout decisions
- How the interactive elements function
- Common debugging issues I encountered

## Browser Support

This website works on:

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

I tried to keep this lightweight and fast:

- No external dependencies except Google Fonts
- Optimized CSS with efficient selectors
- Minimal JavaScript for smooth performance
- Responsive images and efficient animations

## Future Improvements

If I had more time, I would add:

- **Blog Section**: For writing about my coding journey
- **Skills Visualization**: Interactive charts showing my learning progress
- **Dark/Light Mode Toggle**: Let users choose their preference
- **More Animations**: Subtle micro-interactions
- **SEO Optimization**: Better meta tags and structured data
- **Accessibility**: Better keyboard navigation and screen reader support

## Deployment Options

### Free Hosting Options:

- **GitHub Pages** (what I'm using) - Free, easy, automatic deployment
- **Netlify** - Great for static sites with form handling
- **Vercel** - Fast deployment with good performance
- **Firebase Hosting** - Google's hosting platform

### Custom Domain:

You can easily add a custom domain by:

1. Buying a domain (Namecheap, GoDaddy, etc.)
2. Adding a CNAME record pointing to your GitHub Pages URL
3. Updating the custom domain in GitHub Pages settings

## Contributing

Found a bug or want to suggest an improvement? Feel free to:

1. Open an issue
2. Fork the repository
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Want to chat about web development or just say hi?

- **Email**: panashe.sanyanga@hotmail.com
- **LinkedIn**: [linkedin.com/in/panashe-l-s](https://www.linkedin.com/in/panashe-l-s)
- **GitHub**: [github.com/Code-by-PS](https://github.com/Code-by-PS)

## Acknowledgments

- Thanks to the web development community for all the tutorials and resources
- Google Fonts for the beautiful typography
- All the developers who shared their knowledge online

---

**Note:** This portfolio represents my journey as a Computer Science student. I'm constantly learning and improving, so expect updates as I grow as a developer!

Thanks for checking out my portfolio! 🚀

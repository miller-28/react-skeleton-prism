# React Skeleton Prism

A modern React application template built with Vite, featuring a clean project structure and optimized development setup.

## Project Structure

```
react-skeleton-prism/
├── dist/                      # Production build output (generated)
├── node_modules/              # Installed dependencies (generated)
├── public/                    # Static assets served as-is
├── src/
│   ├── components/            # Reusable React components
│   │   ├── Header.jsx
│   │   ├── SideMenuButton.jsx
│   │   └── SiteLayout.jsx
│   ├── styles/
│   │   └── app.css            # Global styles
│   ├── index.html             # HTML entry (Vite expects at project root or configured root)
│   ├── App.jsx                # Root component
│   └── main.jsx               # React application entry point
├── .gitignore
├── package-lock.json
├── package.json               # Project scripts and dependencies
├── vite.config.js             # Vite configuration
└── README.md                  # Project documentation
```

## Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd react-skeleton-prism
```

2. Install dependencies:
```bash
npm install
```

## Development

To start the development server:

```bash
npm run dev
```

This will:
- Start Vite's development server with hot module replacement (HMR)
- Open the application at `http://localhost:2800`
- Watch for file changes and automatically rebuild

## Building for Production

To create a production build:

```bash
npm run build
```

The build process will:
- Create an optimized production build in the `dist/` directory
- Bundle and minimize all JavaScript files
- Process and optimize CSS
- Copy static assets
- Generate source maps

### Build Features

Vite's production build includes:
- Code splitting for optimal loading
- Tree shaking to eliminate dead code
- Asset optimization and minification
- CSS minification and optimization

## Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

This will serve the production build at `http://localhost:2800`.

## Project Features

- ⚡️ Lightning-fast development with Vite
- 🔄 Hot Module Replacement (HMR)
- ⚛️ React 18 with latest features
- 📁 Clean and organized project structure
- 🎨 Global CSS with modular styling support
- 🧩 Component-based architecture

## Dependencies

### Production Dependencies
- `react`: ^18.3.1
- `react-dom`: ^18.3.1

### Development Dependencies
- `vite`: ^5.4.0
- `@vitejs/plugin-react`: ^4.3.0

## Configuration

The project uses a custom Vite configuration (`vite.config.js`):
- Source code is located in the `src` directory
- Production builds output to `dist` directory
- Uses `@vitejs/plugin-react` for React support and optimization

## Available Scripts

| Command         | Description                                                                                    |
| --------------- | ---------------------------------------------------------------------------------------------- |
| `npm install`   | Install project dependencies                                                                   |
| `npm run dev`   | Start development server with hot reload at [http://localhost:2800](http://localhost:2800)     |
| `npm run build` | Build the app for production to the `dist` folder                                             |
| `npm run preview`| Preview the production build locally at [http://localhost:2800](http://localhost:2800)        |

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
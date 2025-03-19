# Precious Plastic Map

An interactive map for the Precious Plastic community, showing workspaces, collection points, machine builders, and more.

## Features

- Interactive map displaying Precious Plastic community points worldwide
- Filter locations by type (Workspace, Machine Builder, Community Point, etc.)
- Search functionality to find specific locations
- Responsive design that works on desktop and mobile devices

## Technologies Used

- React.js
- Leaflet (via react-leaflet)
- OpenStreetMap
- Parcel bundler

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/basement5k/precious-plastic-map.git
   cd precious-plastic-map
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to http://localhost:1234

## Building for Production

To create a production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
precious-plastic-map/
├── src/
│   ├── assets/         # Static assets (images, icons)
│   ├── components/     # React components
│   ├── styles/         # CSS files
│   ├── App.js          # Main App component
│   ├── index.js        # Entry point
│   └── index.html      # HTML template
├── package.json
└── README.md
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Precious Plastic community
- OpenStreetMap contributors
- Leaflet and react-leaflet developers
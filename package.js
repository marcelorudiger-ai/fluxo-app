{
  "name": "fluxo-app",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "concurrently \"npm run server\" \"npm run client\"",
    "server": "node server/index.js",
    "client": "vite",
    "build": "vite build",
    "start": "node server/index.js"
  },
  "dependencies": {
    "@vitejs/plugin-react": "latest",
    "concurrently": "latest",
    "express": "latest",
    "react": "latest",
    "react-dom": "latest",
    "vite": "latest"
  },
  "devDependencies": {}
}


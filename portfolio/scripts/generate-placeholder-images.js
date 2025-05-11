const fs = require('fs');
const path = require('path');

// Create public directory if it doesn't exist
const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Create placeholder SVG images
const createPlaceholderSVG = (name, text) => {
  const svg = `
    <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f3f4f6"/>
      <text x="50%" y="50%" font-family="Arial" font-size="24" fill="#6b7280" text-anchor="middle">${text}</text>
    </svg>
  `;
  fs.writeFileSync(path.join(publicDir, name), svg);
};

// Generate placeholder images
createPlaceholderSVG('profile-placeholder.jpg', 'Profile Image');
createPlaceholderSVG('project1.jpg', 'Traffic Sign Classification Project');
createPlaceholderSVG('project2.jpg', 'Color Recognition Project');
createPlaceholderSVG('project3.jpg', 'Age-Gender Detection Project');

console.log('Placeholder images generated successfully!'); 
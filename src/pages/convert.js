const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Directory containing your images
const inputDir = path.join(__dirname, '../assets/icons');
const outputDir = path.join(__dirname, '../assets/icons');

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Function to convert images to WebP format
const convertToWebP = (inputPath, outputPath) => {
  sharp(inputPath)
    .toFormat('webp')
    .toFile(outputPath, (err, info) => {
      if (err) {
        console.error('Error converting image:', inputPath, err);
      } else {
        console.log('Converted', inputPath, 'to', outputPath);
      }
    });
};

// Read the input directory and convert all images
fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.error('Error reading input directory:', err);
    return;
  }

  files.forEach(file => {
    const inputFilePath = path.join(inputDir, file);
    const outputFilePath = path.join(outputDir, file.replace(/\.\w+$/, '.webp'));
    
    // Convert the image to WebP format
    convertToWebP(inputFilePath, outputFilePath);
  });
});

// /Users/raultorres/Documents/extras/FOTOS/polla.js

// Sample array of strings
const photos = [
    'photo1.jpg',
    'holiday_photo2.jpg',
    'family_photo3.jpg',
    'work_photo4.jpg',
    'photo5.jpg'
];

// Function to search for a term in the array
function searchPhotos(term) {
    return photos.filter(photo => photo.includes(term));
}

// Example usage
const searchTerm = 'holiday';
const results = searchPhotos(searchTerm);

console.log(`Search results for "${searchTerm}":`, results);
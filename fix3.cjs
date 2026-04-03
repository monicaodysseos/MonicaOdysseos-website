const fs = require('fs');

let code = fs.readFileSync('src/data/articles.js', 'utf8');

// The marker where the genai string should END:
const marker = 'us build."\\n  },\\n  {\\n    "slug": "superintelligence-what-is-it-really"';

const parts = code.split(marker);

if (parts.length === 2) {
    let unescapedRest = marker.substring('us build."'.length) + parts[1];
    
    // Unescape literal backslash-n sequences back to actual newlines
    unescapedRest = unescapedRest.replace(/\\n/g, '\n');
    
    // In fix.py, the very last character of the file became a backslash-n as well? 
    // Wait, the end of the file should be `;`, let's just make sure it's valid JS.
    let fixedCode = parts[0] + 'us build."' + unescapedRest;
    
    fs.writeFileSync('src/data/articles.js', fixedCode);
    console.log('Fixed using split!');
} else {
    // maybe try searching by `slug": "superintelligence-what-is-it-really"` ?
    const idx = code.indexOf('"slug": "superintelligence-what-is-it-really"');
    console.log("Could not find marker. Found superintelligence at index: " + idx);
    console.log("Here is a snippet around it:", code.substring(idx - 50, idx + 50));
}

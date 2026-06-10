const fs = require('fs');
const path = require('path');

const targetFolder = path.join(__dirname, 'src');

// This empty object will be our "Map"
const graph = {}; 

console.log("🤖 Grapher starting...");

fs.readdir(targetFolder, (err, files) => {
    if (err) return console.error("❌ Error:", err);

    files.forEach(file => {
        const filePath = path.join(targetFolder, file);
        
        // 1. READ THE FILE
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        
        // 2. SEARCH PATTERN (Find imports)
        const importRegex = /import.*from\s+['"](.*)['"]/g;
        const dependencies = [];
        
        let match;
        // 3. EXTRACT THE FILENAMES
        while ((match = importRegex.exec(fileContent)) !== null) {
            dependencies.push(match[1]); // Grabs the text inside the quotes
        }
        
        // 4. SAVE TO GRAPH
        graph[file] = dependencies;
    });

    console.log("\n🗺️ Dependency Graph Built:");
    console.log(JSON.stringify(graph, null, 2));
});
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'file', 'beta', 'update&close.json');

try {
    const fileData = fs.readFileSync(filePath, 'utf8');
    let jsonData = JSON.parse(fileData);

    let now = new Date();
    let utcHour = now.getUTCHours(); 
    let utcMinute = now.getUTCMinutes(); 

    // Ude 7:30 (UTC 2:00 AM) saha Ude 8:00 (UTC 2:30 AM) dekam thiyenne UTC hour 2 wala.
    if (utcHour === 2) {
        // Vinadiya 15 ta adu nam e kiyanne 7:30 (UTC 2:00) schedule eka run wenne
        if (utcMinute < 15) {
            jsonData.showDialog = true;
            console.log("Time is around 7:30 AM. showDialog set to TRUE.");
        } 
        // Vinadiya 15 ta wadi nam e kiyanne 8:00 (UTC 2:30) schedule eka run wenne
        else {
            jsonData.showDialog = false;
            console.log("Time is around 8:00 AM. showDialog set to FALSE.");
        }
    }

    fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2), 'utf8');
    console.log("File updated successfully!");

} catch (error) {
    console.error("Error updating JSON file:", error);
}

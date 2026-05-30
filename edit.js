const fs = require('fs');
const path = require('path');

// Oyage file path eka hariyatama denna
const filePath = path.join(__dirname, 'file', 'beta', 'update&close.json');

try {
    const fileData = fs.readFileSync(filePath, 'utf8');
    let jsonData = JSON.parse(fileData);

    let now = new Date();
    // UTC hours gannawa (Lankawe welawen paya 5.5 k adui)
    let utcHour = now.getUTCHours(); 

    // Ude 7:20 schedule eka run wenne UTC 1:50 AM ta (Hour = 1)
    if (utcHour === 1) {
        jsonData.showDialog = true;
        console.log("Time is 7:20 AM. showDialog set to TRUE.");
    } 
    // Ude 8:00 schedule eka run wenne UTC 2:30 AM ta (Hour = 2)
    else if (utcHour === 2) {
        jsonData.showDialog = false;
        console.log("Time is 8:00 AM. showDialog set to FALSE.");
    }

    // Wenas karapu data eka aye save kireema
    fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2), 'utf8');
    console.log("File updated successfully!");

} catch (error) {
    console.error("Error updating JSON file:", error);
}

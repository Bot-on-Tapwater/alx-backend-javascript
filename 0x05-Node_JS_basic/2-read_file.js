const fs = require('fs');

function countStudents(csvFile) {
  fs.readFile(csvFile, 'utf8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    } else {
      const lines = data.split('\n').slice(1).filter((line) => line.trim() !== '');

      const fields = {};

      lines.forEach((element) => {
        const field = element.split(',')[3];
        const firstName = element.split(',')[0];
        if (!(field in fields)) {
          fields[field] = [firstName];
        } else {
          fields[field].push(firstName);
        }
      });

      console.log(`Numer of students: ${lines.length}`);

      for (const [key, value] of Object.entries(fields)) {
        console.log(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
      }
    }
  });
}

module.exports = countStudents;

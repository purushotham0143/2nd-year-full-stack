// else if (puru.pathname == '/change') {
//     let arrayofObj = JSON.parse(fs.readFileSync('./login.json', 'utf-8'));
//     arrayofObj.forEach((obj) => {
//         if (obj.uname === puru.query.uname) {
//             obj.password = puru.query.password;
//             // Stringify the entire array
//             const updatedData = JSON.stringify(arrayofObj);
//             // Write the updated array back to the file
//             fs.writeFileSync('./login.json', updatedData, 'utf-8');
//             res.setHeader("Content-Type", "application/json");
//             res.end(JSON.stringify({ message: "Password changed" }));
//         }
//     });
// }

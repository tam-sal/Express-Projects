const path = require('path')
//* Platform Separator
//? path.sep

//console.log(path.sep) //! >> /

//* filePath
//? const filePath = path.join('/mainFolder', 'subFolder', 'fileName.extension')
//! >> /mainFolder/subFolder/fileName.txt

//* basename -> last file in the path
//? const base = path.basename(filepath)
//! >> fileName.txt

//* absolute path
//? const absolute = path.resolve(__dirname, '/mainFolder', 'subFolder', 'fileName.extension')
//! >> /users/username/...../fileNme.txt
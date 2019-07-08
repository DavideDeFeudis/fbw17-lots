// might need to add this as a comment:
//jshint esversion:6

const fs = require('fs');
// fs = file system: specify paths, open files, change files, access, read, write

fs.copyFileSync("file1.txt", "file2.txt");
// use this to test that fs works. it copies source content to destination (if destination doesn't exist it creates it)
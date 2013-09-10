argv
====

process argv from command line


Usage
===

    var args = require('./args.js');

	  a = args.get();
	  
	  console.log(a);
	 

Command Line
===

    node index.js name=helondeng age=25 female

Output
===

    { name: 'helondeng', age: '25', female: true }

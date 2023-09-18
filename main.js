const employees = [

	{ name: "David Carlson", age: 30 },
	
	{ name: "John Cena", age: 34 },
	
	{ name: "Mike Sheridan", age: 25 },
	
	{ name: "John Carte", age: 50 }
	
	];
	
	// Print the record for the employee whose name is John using find method
	
	// Print the record for the employee whose name is John index position using findIndex method

	let a=employees.find(function(e){

		return e.age>30
	})

	document.write(JSON.stringify(a)+"<br>")

	let a1=employees.findIndex(function(e){

		return e.age>30
	})

	document.write(a1+"<br><br>")

	let b=employees.find(function(e){

		return e.age>40
	})

	document.write(JSON.stringify(b)+"<br>")

	let b1=employees.findIndex(function(e){

		return e.age>40
	})

	document.write(b1+"<br><br>")

	
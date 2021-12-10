

var wizards = ['Hermione', 'Neville', 'Gandalf'];

// Get the app element
var app = document.querySelector('#app');

// Create markup
app.innerHTML = '<ul>' + wizards.map(function (wizard) {
	return '<li>' + wizard + '</li>';
}).join('') + '</ul>';
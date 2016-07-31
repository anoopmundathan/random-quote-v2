// famous quotes array of objects
var quotes = [

	{
		quote: 'I never \'worry\' about action, but only about inaction',
		source: 'Winston Churchill',
		citation: 'Churchill: In His Own Words',
		year: 1926,
		tags: 'Inspirational'
	},

	{
		quote: 'It always seems impossible until its done',
		source: 'Nelson Mandela',
		year: 1997,
		tags: 'Motivational'
	},

	{
		quote: 'There is only one thing that makes a dream impossible to achieve: the fear of failure',
		source: 'Paulo Coelho',
		tags: 'Inspirational'
	},

	{
		quote: 'What we think, we become',
		source: 'Buddha',
		tags: 'Inspirational'
	},

	{
		quote: 'Put your heart, mind, and soul into even your smallest acts. This is the secret of success',
		source: 'Swami Sivananda',
		tags: 'Inspirational'
	},

	{
		quote: 'No man has a good enough memory to be successful liar',
		source: 'Abraham Lincoln',
		tags: 'Funny'
	},

	{
		quote: 'Problems are not stop signs, they are guidelines',
		source: 'Robert H. Schuller',
		tags: 'Life'

	},
	{
		quote: "Don't watch the clock; do what it does. Keep going",
		source: 'Sam Levenson',
		tags: 'Motivational'
	},
	{
		quote: 'Do something wonderful, people may imitate it',
		source: 'Albert Schweitzer',
		tags: 'Life'
	},
	
	{
		quote: 'In order to carry a positive action we must develop here a positive vision',
		source: 'Dalai Lama',
		tags: 'Life'
	},
	{
		quote: 'Live life to the fullest, and focus on the positive',
		source: 'Matt Cameron',
		tags: 'Life'
	}
	
];

// array to check random quote more than once until ALL quotes from the array have been displayed.
var arr = [];

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// this function get the random quote, format quote and change background color of the page
function printQuote() {
	
	var quoteObj,
		message;

	// get a random quote
	quoteObj = getRandomQuote();
	
	// format message
	message = '<p class="quote">' + quoteObj.quote + '</p>';
	message += '<p class="source">' + quoteObj.source ;

	if (quoteObj.citation !== undefined) {
		message += '<span class="citation">' + quoteObj.citation + '</span>';
	} 

	if (quoteObj.year !== undefined) {
		message += '<span class="year">' + quoteObj.year + '</span>';
	}
	
	if (quoteObj.tags !== undefined) {
		message += '<span class="tags">' + quoteObj.tags + '</span>';
	}
	
	message += '</p>';

	document.getElementById('quote-box').innerHTML = message;

	// change background color
	changeColor();
}

// this function generate random number and return quote object
function getRandomQuote() {
	
	var flag = '1';
	
	// Don't display a random quote more than once until ALL quotes from the array have been displayed.
	do {
		var randomIndex = Math.floor(Math.random() * quotes.length);
		
		// if all random quote displayed, start again
		if (arr.length === quotes.length) {
			arr = [];
		}

		// check if index is already generated
		if (arr.indexOf(randomIndex) === -1) {
			arr.push(randomIndex);
			flag = 0;
		}

	} while(flag === '1');
	
	// return quote
	return quotes[randomIndex];
}

// change background color of the page
function changeColor() {
	var color = getRandomColor();
	document.body.style.background =  "rgb(" + color.red + ',' + color.green + ','+ color.blue + ")" ;
}

// generate random rgb values and return the values as object
function getRandomColor() {
	return {
			red: Math.floor(Math.random() * 256),
			green: Math.floor(Math.random() * 256),
			blue: Math.floor(Math.random() * 256)
	};
}

// Keep running for every 30 seconds
function changeBackground() {
	printQuote();
	setTimeout(changeBackground, 1000 * 30);
}

// Refresh the quote after every 30 seconds
changeBackground();

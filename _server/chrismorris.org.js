var express	= require('express');
var app		= express();

app.use(express.bodyParser());


app.get('/quotes', function(req, res){
  var quotes = ['{"author":"Albert Einstein", "quote":"Ultimate automation … will make our modern industry as primitive and outdated as the stone age man looks to us today."}',
                '{"author":"K. Eric Drexler", "quote":"In thinking about nanotechnology today, what’s most important is understanding where it leads, what nanotechnology will look like after we reach the assembler breakthrough."}',
                '{"author":"Dr. Michio Kaku", "quote":"In fact, if appearance and essence were the same thing, there would be no need for science."}',
                '{"author":"Edward R. Harrison", "quote":"Hydrogen is a light, odorless gas, which, given enough time, turns into people."}',
                '{"author":"Ken Segall", "quote":"In the world of Apple, a Pro product used to mean “designed for high-end professionals with needs far beyond those of mortal men.” Now it simply means “the high-performance model.”"}',
                '{"author":"Alan Kay", "quote":"People who are really serious about software should make their own hardware."}',
                '{"author":"Albert Einstein", "quote":"Logic will get you from A to B. Imagination will take you everywhere."}',
                '{"author":"Richard P. Feynman", "quote":"Physics is like sex. Sure, it may give some practical results, but that’s not why we do it."}',
                '{"author":"Abraham Lincoln", "quote":"I destroy my enemies when I make them my friends."}',
                '{"author":"Ambrose Moon", "quote":"Courage is not the absence of fear, but rather the judgement that something else is more important than fear."}',
                '{"author":"Kenneth Boulding", "quote":"Anyone who believes exponential growth can go on forever in a finite world is either a madman or an economist."',
                '{"author":"Richard Dawkins", "quote":"It has become almost a cliché to remark that nobody boasts of ignorance of literature, but it is socially acceptable to boast ignorance of science and proudly claim incompetence in mathematics."}',
                '{"author":"William Gibson", "quote":"Before you diagnose yourself with depression or low self-esteem, first make sure that you are not, in fact, just surrounded by assholes."}',
                '{"author":"Dwight Schrute", "quote":"Would I ever leave this company? Look, I’m all about loyalty. In fact, I feel like part of what I’m being paid for here is my loyalty. But if there were somewhere else that valued loyalty more highly, I’m going wherever they value loyalty the most."}',
                '{"author":"Neil deGrasse Tyson", "quote":"Actually, America is inching its way towards the metric system."}',
                '{"author":"Stephen Colbert", "quote":"I tweet, therefore I am."}',
                '{"author":"Karl Von Clausewitz", "quote":"War is a continuation of politics by other means. Politics is a continuation of economics by other means."}',
                '{"author":"Adolf Hitler", "quote":"Let me control the textbooks and I will control the state."}' /* This quote is negative, but it's true. */,
                '{"author":"Thomas Jefferson", "quote":"When the people fear the government there is tyranny, when the government fears the people there is liberty."}',
                '{"author":"Ayn Rand", "quote":"A creative man is motivated by the desire to achieve, not by the desire to beat others."}',
                '{"author":"Winston Churchill", "quote":"If you're going through hell, keep going."}',
                '{"author":"Og Mandino", "quote":"Always do your best. What you plant now, you will harvest later."}',
                '{"author":"Walt Disney", "quote":"If you can dream it, you can do it."}',
                '{"author":"Thomas Edison", "quote":"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time."}',
                '{"author":"Ken Venturi", "quote":"I don't believe you have to be better than everybody else. I believe you have to be better than you ever thought you could be."}',
                '{"author":"Albert Einstein", "quote":"When you are courting a nice girl an hour seems like a second. When you sit on a red-hot cinder a second seems like an hour. That's relativity."}',
                '{"author":"Elbert Hubbard", "quote":"Do not take life too seriously. You will never get out of it alive."}',
                '{"author":"Isaac Asimov", "quote":"People who think they know everything are a great annoyance to those of us who do."}'
		];
  var chosenQuote = quotes[Math.floor(Math.random() * quotes.length)];

  console.log("GET: Quote = " + chosenQuote);
  res.send(chosenQuote);
});


app.post('/views', function(req, res){

  var slug		= (req.body.slug).replace('/', '');
  var mysql		= require('mysql');
  var connection	= mysql.createConnection({
    host            : 'localhost',
    user            : 'USERNAME',
    password        : 'PASSWORD',
    database        : 'chrismorrisorg',
  });

  connection.connect();

  // Return the number of views for a given URL
  connection.query('SELECT FORMAT(views+1, 0) AS views FROM views WHERE url = ?', [slug], function(err, rows, fields) {
    console.log("POST: View incremented on slug = '" + slug + "', views now = " + rows[0]);

    res.setHeader('Content-Type', 'application/json');
    res.send(rows[0]);
  });
    
  // Update views
  connection.query('UPDATE views SET views = views+1 WHERE url = ?', [slug], function(err, rows, fields) {});

  // Close MySQL
  connection.end();

});


app.listen(3000);

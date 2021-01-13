const dbConfig = require('./config/db.config')

const db = require("./models");
const Airport = db.airport;
const Passenger = db.passenger;
const Flight = db.flight;
const Terminal = db.terminal;


// db connection
db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

const airport = new Airport({
	name: "First Airport",
	country: "US",
	opened: "2020-12-15"
})

const flight1 = new Flight({
  from: "CDG France",
  to: "JFK New-York, USA",
  airline: "American Airlines",
})

const flight2 = new Flight({
  from: "CDG France",
  to: "JFK New-York, USA",
  airline: "American Airlines",
})

const airport2 = new Airport({
	name: "JFK",
	country: "USA",
	opened: "1990-12-15"
})

const terminal = new Terminal({
	name: "Terminal 1",
  flights: ["flight1", "flight2"],
  capacity: 234324,
})

airport.save()
console.log("Airport saved", airport)
// Lets Make and Save our first airport

airport2.save()
console.log("Airport 2 saved", airport2)
// Lets Make and Save our second airport

flight1.save()
console.log("Flight saved", flight1)
// Lets Make and Save our first flight

flight2.save()
console.log("Flight 2 saved", flight2)
// Lets Make and Save our second flight

airport.terminals.push(terminal)
console.log("Terminal pushed!", airport)
console.log("Terminal !", terminal)
// save terminal to the airport

Terminal.
  findById('5fde5d6e589d7b424eea7f1b').
  populate('flights').
  exec(function (err, terminal) {
    if (err) {console.log(err)};
    console.log(terminal)
  });
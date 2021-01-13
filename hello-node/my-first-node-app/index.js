const moment = require('moment')

console.log(moment().format('MMM Do YYYY'))

console.log(moment('12-27-1993', "MM DD YYYY").format('dddd [the] Do [of] MMMM [in the year] YYYY'))

// fromNow tells how long ago from the date
console.log('Oh boy, that was', moment('12-27-1993', "MM DD YYYY").fromNow())
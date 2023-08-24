const daysInMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
console.log(daysInMonth);


function getDayName(dayNumber){
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return daysOfWeek[dayNumber];
  }

const date =  new Date();
console.log(`date ${date}`)
const date2 = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
console.log(`date ${date2}`)

  let day = getDayName(date.getDay())
  console.log(day)


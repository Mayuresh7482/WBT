function getWeekDay(date) {

    switch (date.getDay()) {
      case 0:
        return "Sun";
      case 1:
        return "Mon";
      case 2:
        return "Tues";
      case 3:
        return "Wed";
      case 4:
        return "Thur";
      case 5:
        return "Fri";
      case 6:
        return "Sat";
      default:
        return "Invalid day";
    }
  }
  
  let date = new Date(2012,0,3);
  
  console.log("Week days are " + getWeekDay(date));
  
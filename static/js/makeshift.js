  
var do_conversion = function(d) {

    var makeshift_month = new Array(13);
    makeshift_month[0] = "Wax";
    makeshift_month[1] = "Sweep";
    makeshift_month[2] = "Leap";
    makeshift_month[3] = "March";
    makeshift_month[4] = "Ram";
    makeshift_month[5] = "Gather";
    makeshift_month[6] = "Harbor";
    makeshift_month[7] = "Crawl";
    makeshift_month[8] = "Bear";
    makeshift_month[9] = "Nestle";
    makeshift_month[10] = "Turn";
    makeshift_month[11] = "Fall";
    makeshift_month[12] = "Veer";
    makeshift_month[13] = "Wax";

    var makeshift_weekday = new Array(6);
    makeshift_weekday[0] = "Monday";
    makeshift_weekday[1] = "Tuesday";
    makeshift_weekday[2] = "Wednesday";
    makeshift_weekday[3] = "Thursday";
    makeshift_weekday[4] = "Friday";
    makeshift_weekday[5] = "Saturday";
    makeshift_weekday[6] = "Sunday";

    var today = d;

    var mpcreference=new Date(today.getFullYear(), 0, 3, today.getHours());

    //Set 1 day in milliseconds
    var one_day=1000*60*60*24;

    //Calculate difference btw the two dates, and convert to days + a full leap cycle (1461)
    var diff = Math.ceil((today.getTime()-mpcreference.getTime())/(one_day)) + 1461;
    
    var yr = today.getYear();
    if (yr < 1000) {
      yr += 1900;
    }           

    if (diff < 1461) {
      yr = yr - 1;
    }           
    
    var leap = (yr % 4);
    var leapadd = 0;
    if ((leap==0) && (diff > 1518)) {
      leapadd = 1;
    }

    var makeyear = yr - 2000;
    if (makeyear < 0) {
      makeyear = yr;
    }

    var dayadd = 0;
    if (diff > 1461) {
      dayadd = 1;
    }

    var makemonth = Math.ceil((diff-5-leapadd)/28) - 52;
    var monthname = makeshift_month[makemonth];

    if (makemonth==0) {
      makemonth = 13;
    }

    var makeday = "makeday";
    var dayname = "dayname";
    
    if (diff==1461) {
      makeday = "daynot";
      dayname = "nonday";
    }
    else if ((leap==0) && (diff==1518)) {
      makeday = "leapday";
      dayname = "nonday";
    }
    else {
      makeday = ((diff-5-dayadd-leapadd) % 28) + 1;
      dayname = makeshift_weekday[(diff-5-dayadd-leapadd) % 7];
    }

    return {
      'makeday': makeday,
      'dayname': dayname,
      'makemonth': makemonth,
      'monthname': monthname,
      'makeyear': makeyear
    }
  };

  var make_display = function(d) {
      var makeshift = do_conversion(d);

      var makeday = makeshift.makeday;
      var dayname = makeshift.dayname;
      var makemonth = makeshift.makemonth;
      var monthname = makeshift.monthname;
      var makeyear = makeshift.makeyear;

      var result = "";

      switch(makeday) {
        case "daynot":
          result = "0-0-" + makeyear + "  (Day Not, year " + makeyear + ")";
          break;
        case "leapday":
          result = "0-3-" + makeyear + "  (Leap Day, year " + makeyear + ")";
          break;
        default:
          result = dayname + ", " + makeday + "-" + makemonth + "-" + makeyear + "  (day " + makeday + " of " + monthname + ", year " + makeyear + ")";
      }

      return result;
  };


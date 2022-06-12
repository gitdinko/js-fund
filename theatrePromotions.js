function theatrePromotions(type, age) {
  let price;
  if (age >= 0 && age <= 18) {
    switch (type) {
      case "Weekday":
        price = 12;
        break;
      case "Weekend":
        price = 15;
        break;
      case "Holiday":
        price = 5;
        break;
    }
  } else if (age > 18 && age <= 64) {
    switch (type) {
      case "Weekday":
        price = 18;
        break;
      case "Weekend":
        price = 20;
        break;
      case "Holiday":
        price = 12;
        break;
    }
  } else if (age > 64 && age <= 122) {
    switch (type) {
      case "Weekday":
        price = 12;
        break;
      case "Weekend":
        price = 15;
        break;
      case "Holiday":
        price = 10;
        break;
    }
  } else {
    console.log("Error!");
  }
  if (age >= 0 && age <= 122) {
    console.log(price + "$");
  }
}

theatrePromotions("Weekday", 31);
theatrePromotions("Weekend", 15);
theatrePromotions("Holiday", 60);

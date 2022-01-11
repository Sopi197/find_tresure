let getRandomNumber = function(size) {
   return Math.floor(Math.random()*size);
}

let width = 400;
let height = 400;
let clicks = 0;
let restClicks = 20;

let target = {
   x: getRandomNumber(width),
   y: getRandomNumber(height)
}

let getDistance = function(event, target) {
   diffX = event.offsetX - target.x;
   diffY = event.offsetY - target.y;
   return Math.sqrt((diffX*diffX) + (diffY*diffY));
}

let getDistanceHint = function(distance) {
   if (distance<10) {
      return "Обожжешься!" + " Осталось " + restClicks;
   }
   else if (distance<20) {
      return "Очень горячо!" + " Осталось " + restClicks;
   }
   else if (distance<40) {
      return "Горячо!" + " Осталось " + restClicks;
   }
   else if (distance<80) {
      return "Тепло!" + " Осталось " + restClicks;
   }
   else if (distance<160) {
      return "Холодно!" + " Осталось " + restClicks;
   }
   else if (distance<320) {
      return "Очень холодно!" + " Осталось " + restClicks;
   }
   else if (distance<350) {
      return "Очень очень холодно!" + " Осталось " + restClicks;
   }
   else {
      return "Замёрзнешь!" + " Осталось " + restClicks;
   }
};

let game = function(event) {
   let distance = getDistance(event, target);
   let distanceHint = getDistanceHint(distance);
   $("#distance").text(distanceHint);
   if (distance<=8) {
      alert("Ты победил");
   }
   else if (clicks>=20) {
      alert("Ты проиграл!");
      $("#distance").text("Ты лошара!");
   }
   clicks++;
   restClicks--;
}

$(".map").click(game);

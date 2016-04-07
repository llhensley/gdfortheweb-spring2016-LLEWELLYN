var name = "Llewellyn";
var zip = 10001;

function sayHello() {
	var greeting = "Hello " + name;
	console.log(greeting);
}

sayHello();


$("div").hover(function() {
	$(this).addClass("hovered");
	var randNumber = Math.random() * 100;
	console.log(randNumber);
	$(this).css("border-width", randNumber + "px");
});
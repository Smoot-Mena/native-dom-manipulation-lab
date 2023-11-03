let quotes = [
	`I live my life a quarter mile at a time`,
	`I said a ten-second car, not a ten-minute car`,
	`You can have any brew you want... as long as it's a Corona.`,
	`You almost had me? You never had me - you never had your car!`,
	`I don't have friends. I have family.`,
	`It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener("DOMContentLoaded", function (event) {
	// Random quote of the day generator
	const randomQuote = function () {
		document.querySelector("#quote-of-the-day").textContent = `"${
			quotes[Math.floor(Math.random() * quotes.length)]
		}"`;
	};
	randomQuote();

	// Do all of your work inside the document.addEventListener

	// Part 1
	let title = document.getElementById("main-title");
	title.textContent = "Dom Toretto's Page";

	// Part 2
	document.body.style.backgroundColor = "snow";

	// Part 3
	let favoriteThings = document.getElementById("favorite-things");
	favoriteThings.lastElementChild.remove();

	// Part 4
	let specialTitles = document.querySelectorAll(".special-title");
	specialTitles.forEach((title) => (title.style.fontSize = "2rem"));

	// Part 5
	let pastRaces = document.getElementById("past-races");
	pastRaces.children.item(3).remove();
	// Part 6
	let li = document.createElement("li");
	li.textContent = "New York City";
	pastRaces.appendChild(li);

	// Part 7
	let main = document.querySelector(".main");
	let div = document.createElement("div");
	div.classList.add("blog-post", "purple");
	div.innerHTML = `
<h2>New York City</h2>
<p>I WAS IN THE GREATEST CITY IN THE WORLD!</p>
`;
	main.appendChild(div);

	// Part 8

	let quoteTitle = document.querySelector("#quote-title");
	quoteTitle.addEventListener("click", () => {
		randomQuote();
	});

	// Part 9
	let blogPosts = document.querySelectorAll(".blog-post");

	for (let post of blogPosts) {
		post.addEventListener("mouseenter", () => {
			post.classList.toggle("red");
		});

		post.addEventListener("mouseout", () => {
			post.classList.toggle("purple");
		});
	}
});

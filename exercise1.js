//Part 1. There are three people waiting for the bank. Their names, in order, are Sofia, David, and Juan. Create an array that has these three names in order.

var bankArray = ["Sofia", "David", "Juan"];
console.log(bankArray);

//Part 2. Two more people get added to the back of the line - Sara and Augustin. The first person in line is called to the teller. What does the queue look like?

bankArray.push("Sara");
bankArray.push("Agustín");
bankArray.shift();

console.log(bankArray);

//Part 3. It turns out David was saving a spot for his friend Renata. She shows up and goes behind him in the line. One more person (Elena) shows up and goes to the end of the line. What does the queue look like?

bankArray.shift();
bankArray.unshift("Renata");
bankArray.unshift("David");
bankArray.push("Elena");

console.log(bankArray);

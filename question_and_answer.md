# FAQ

#### Question 1

---

#### let greeting;

#### greetign = {};

#### console.log(greetign);

---

#### Answer: A:{}

--explain:This JavaScript code initializes a variable greeting without a value. It then assigns an empty object {} to greeting. When console.log(greeting) is executed, it displays the empty object in the console. This signifies that greeting now points to an empty JavaScript object, represented by a pair of curly braces {}.

#### Question 2

#### Answer: C:"12"

--explain: The provided JavaScript code defines a sum function that adds two values. However, when sum(1, "2") is called, the second argument is a string, not a number. JavaScript performs string concatenation instead of addition, resulting in the string "12"

#### Question 3

#### const food = ["🍕", "🍫", "🥑", "🍔"];

#### const info = { favoriteFood: food[0] };

#### info.favoriteFood = "🍝";

#### console.log(food);

#### Answer: A: ['🍕', '🍫', '🥑', '🍔']

--explain: The code initializes an array food with four food emojis. Then, an object info is created with a property favoriteFood set to the first element of food (which is "🍕"). Later, info.favoriteFood is reassigned to "🍝". However, the food array remains unchanged. When console.log(food) is called, it prints the original food array, resulting in ["🍕", "🍫", "🥑", "🍔"]

#### Question 4

#### function sayHi(name) {

#### return `Hi there, ${name}`;

#### }

#### console.log(sayHi());

#### Answer: B: Hi there, undefined

--explain: The code defines a function sayHi that expects a name parameter for personalization. When sayHi() is called without an argument, name is undefined. Consequently, the function returns a greeting string with "undefined". The output of console.log(sayHi()); will be "Hi there, undefined", indicating a generic greeting without a specified name.

#### Question 5

#### let count = 0;

#### const nums = [0, 1, 2, 3];

#### nums.forEach((num) => {

#### if (num) count += 1;

#### });

#### console.log(count);

#### Answer: C: 3

--explain: The code initializes a count variable to 0 and an array nums with values [0, 1, 2, 3]. It then uses a forEach loop to iterate through nums. For each element, it checks if it's truthy (not equal to 0). If so, it increments count. After looping, count represents the number of truthy values in nums, which is 3. The final console.log(count) outputs this count, which is 3.

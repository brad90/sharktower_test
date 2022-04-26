# sharktower_test

# Assignment

Write a function that accepts two strings and checks whether they are anagrams of each other.

Anagrams are strings that have exactly the same characters, but potentially in a different order (i.e. `angel` and `glean`).

The function should return a boolean of value true if the strings are anagrams of each other.

The function should return false if they are not anagrams.

# Solution Explained

1. First thought was to be able to check the indexs of each char in the string, therefore i started off with direction of turning the string into an array and then sorting those chars.

2. To do this i would have to split the original strings by the characters and then sort them, assigning them to variables to make it easier to read later on.

3. Next I would need to create some sort of loop. I did this by taking the length of one of the strings as the index start, by this point we know they are the same length due to the check, so with each pass of the while loop it decreases the index by 1, before it stops when gets below 0. If at any point the index values of both arrays do not to match, then the if would catch it and it would not be an anagram.

4. If it passes, the only thing left to do is return the true as all checks have been done.

5. I put in additional during coding. The first if statement returns false if any of the data is undefinened or not in the type that we need, or if the strings are not the same lenght or are just the same word as these would not be an anagram.

I put an additional .toLowerCase in the split to ensure that there was the same casing.

# Limitations

There is the possibility that a string could have special characters or numbers in it which i have not accounted for but given the exercise i thought it would be too much.

The check at the top may be over engineered for this example, but i have included it none the less to show I am aware of possible errors and how to handle them.

Additionally, the function could of had a try catch for any other failures mentioned in the above.

# Running the test

Unit testing is done using Jest package. To run the test, run the following command in the terminal at the root directory.

`npm test`

const anagramChecker = require('./anagramChecker');

test('Test strings are not anagrams', () => {
	expect(anagramChecker('listen', 'sound')).toBe(false);
});

test('Test strings are anagrams', () => {
	expect(anagramChecker('act', 'cat')).toBe(true);
});

test('Test strings are not same length', () => {
	expect(anagramChecker('listen', 'silen')).toBe(false);
});

test('Test handling of bad arguements', () => {
	expect(anagramChecker()).toBe(false);
});

test('Test handling of strings being the same', () => {
	expect(anagramChecker()).toBe(false);
});

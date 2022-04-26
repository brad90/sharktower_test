function anagramChecker(str1, str2) {
	if (!str1 || !str2 || str1.length != str2.length || str1 === str2 || typeof str1 != 'string' || typeof str2 != 'string') return false;

	const split1 = str1.toLowerCase().split('').sort();
	const split2 = str2.toLowerCase().split('').sort();

	let i = split1.length;
	while (i--) {
		if (split1[i] != split2[i]) return false;
	}

	return true;
}

module.exports = anagramChecker;

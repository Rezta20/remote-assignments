function max(numbers) {
	let maxNumber = -Infinity;

	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] > maxNumber) {
			maxNumber = numbers[i];
		}
	}
	return maxNumber;
}

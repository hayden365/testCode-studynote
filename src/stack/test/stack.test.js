const Stack = require("../stack.js");

describe("Stack", () => {
	let stack;

	beforeEach(() => {
		stack = new Stack();
	});

	it("is created empty", () => {
		expect(stack.size()).toBe(0);
	});
});

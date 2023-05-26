const check = require("../check");

describe("checi", () => {
	let onSuccess;
	let onFail;

	beforeEach(() => {
		onSuccess = jest.fn();
		onFail = jest.fn();
	});

	it("should call onSuccess when predicate is true", () => {
		check(() => true, onSuccess, onFail);

		// expect(onSuccess.mock.calls.length).toBe(1);

		expect(onSuccess.mock.calls[0][0]).toBe("yes");
		expect(onFail.mock.calls.length).toBe(0);
	});
});

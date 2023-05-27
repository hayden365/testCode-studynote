//mock을 남용하는 사례
const ProductService = require("../product_service_no_di.js");
const ProductClient = require("../product_client.js");
jest.mock("../product_client");

describe("ProductService", () => {
	const fetchItems = jest.fn(async () => [
		{ item: "Milk", available: true },
		{ item: "banana", available: false },
	]);
	ProductClient.mockImplementation(() => {
		return {
			fetchItems,
		};
	});
	let productService;

	beforeEach(() => {
		productService = new ProductService();
	});

	it("should filter out only available items", async () => {
		const items = await productService.fetchAvailableItems();
		expect(items.length).toBe(1);
		expect(items).toEqual([{ item: "Milk", available: true }]);
	});

	it("test", async () => {
		const items = await productService.fetchAvailableItems();
		expect(fetchItems).toHaveBeenCalledTimes(1);
	});
});

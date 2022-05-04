const HelloWorldContract = artifacts.require("HelloWorld");

contract("HelloWorldContract", () => {
  it("should deploy smart contract as expected", async () => {
    const smartContract = await HelloWorldContract.deployed();
    assert(smartContract.address !== "");
  });

  it('should return "Hello World"', async () => {
    const smartContract = await HelloWorldContract.deployed();
    const res = await smartContract.helloWorld();
    assert(res === "Hello World");
  });

  const _input = "Akshay";
  it("should return " + _input, async () => {
    const smartContract = await HelloWorldContract.deployed();
    const res = await smartContract.greeting(_input);
    assert(res === _input);
  });
});

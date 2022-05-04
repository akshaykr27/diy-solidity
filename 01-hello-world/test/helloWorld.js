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
});

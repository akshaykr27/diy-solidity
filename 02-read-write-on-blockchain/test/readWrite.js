const ReadWriteContract = artifacts.require("ReadWrite");

contract("ReadWriteContract", () => {
  it("should deploy smart contract as expected", async () => {
    const smartContract = await ReadWriteContract.deployed();
    assert(smartContract.address !== "");
  });

  const toSet = "S3cretDat@";
  it(
    "should set data '" + toSet + "', and read back the same from blockchain",
    async () => {
      const smartContract = await ReadWriteContract.deployed();
      await smartContract.setData(toSet);
      const res = await smartContract.getData();
      assert(res === toSet);
    }
  );
});

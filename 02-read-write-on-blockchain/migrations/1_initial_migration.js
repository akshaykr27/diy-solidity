const Migrations = artifacts.require("ReadWrite");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};

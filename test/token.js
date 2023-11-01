const { expect } = require("chai");
const { ethers } = require("hardhat");

describe('ttscu', function () {


    let matic;
    let Ttscu
    let ttscu
    beforeEach(async function () {
        [owner, wallet1, wallet2] = await ethers.getSigners();

        Ttscu = await ethers.getContractFactory('Ttscu', owner);
        const Matic = await ethers.getContractFactory('Matic', wallet1);
        // console.log(Matic, "kkkkkkkkkk");
        ttscu = await Ttscu.deploy();
        matic = await Matic.deploy();


// console.log(ttscu.target, matic.target, "maticccc")
      const h=  await matic.connect(wallet1).transfer(wallet2.target, 1000);
          console.log(h,"jjjjjjjjjjj");
        await matic.connect(wallet1).approve(ttscu.address, 4000);
        await matic.connect(wallet2).approve(ttscu, 1000);

        MATICSYMBOL = ethers.utils.formatBytes32String('Matic');
        await ttscu.whiteLsitToken(MATICSYMBOL, matic.address);
        // await matic.
        //         const balanceOf = await matic.connect(wallet1).balanceOf(owner.address)
        //    console.log(balanceOf,"balacneOf");

    })
    describe('deployment', function () {

        // describe('MyToken contract', function () {
        console.log("helloooooooooooooooo");

        it('it should mint tokens to wallet 1', async function () {
            // console.log(wallet1.target,"kkkkkkkkkkkk");
            const mint=await matic.mint(owner.target, 1000000);
    console.log(mint,"kkkkkkkkkkk");
            await matic.connect(wallet1).transfer(wallet2.address, 1000);

            // const balanceOf = await matic.balanceOf(wallet.address)
            // console.log(balanceOf, "balanceOf");
            expect(await matic.balanceOf(wallet1.target)).to.equal(1000);
        })
        it('it should transfer tokens to wallet 2', async function () {
            expect(await matic.balanceOf(wallet2.target)).to.equal(1000);
        })
        it('should whitelist matic on the contract', async function () {
            expect(await ttscu.whiteListedTokens(MATICSYMBOL)).to.equal(matic.address);
        })
    })
})

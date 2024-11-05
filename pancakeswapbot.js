const ethers = require('ethers'); // npm i ethers@5.6.8
require('dotenv').config();

const WBNB = ""; 
const BUSD = "";

const router = "";

const provider = new ethers.providers.JsonRpcProvider(process.env.URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
const signer = wallet.connect(provider);

const routerContract = new ethers.Contract(
    router,
    [
        'function getAmountsOut(uint amountIn, address[] memory path) public view returns(uint[] memory amounts)',
        'function swapExactTokensForTokens(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)'
    ],
    signer
);

const busdContract = new ethers.Contract(
    BUSD,
    [
        'function approve(address spender, uint256 amount) external returns (bool)'
    ],
    signer
)

async function main() {

    const BUSDamountIn = ethers.utils.parseUnits('100', 18);
    let amounts = await routerContract.getAmountsOut(BUSDamountIn, [BUSD, WBNB]);
    const WBNBamountOutMin = amounts[1].sub(amounts[1].div(10));

    console.log(ethers.utils.formatEther(BUSDamountIn));
    console.log(ethers.utils.formatEther(WBNBamountOutMin));

    const approveTx = await busdContract.approve(
        router,
        BUSDamountIn
    );
    let reciept = await approveTx.wait();
    console.log(reciept);

    const swapTx = await routerContract.swapExactTokensForTokens(
        BUSDamountIn,
        WBNBamountOutMin,
        [BUSD, WBNB],
        wallet.address,
        Date.now() + 1000 * 60 * 10,
        {gasLimit: 250000}
    )

    receipt = await swapTx.wait();
    console.log(receipt);
}

main().then().finally(() => {});

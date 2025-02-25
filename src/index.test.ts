import { GatewayEzMode } from ".";

describe('gatewaySdk', () => {
    it('should initialize correctly', () => {
        new GatewayEzMode
    });

    it('should be able to get the gateways status', async () => {
        const gateway = new GatewayEzMode
        await gateway.gateway.status.getCurrent()
    });

    it('should not error when I ask for an accounts balances', async () => {
        const account = "account_rdx12yspdmpd6jdgcffkk6vjkqa9fagf3wnha5xd06s3uje5wr9664arkf"
        const gateway = new GatewayEzMode
        const balances = await gateway.getAllFungibleAccountBalances(account)
        for (const balance of balances) {
            console.log(balance)
        }
        expect(balances).toBeDefined()
    });

    // I put 1 RÅTTA in this account and then deleted access to it on-ledger so this test should always pass
    it('should see 1 ratta in this account', async () => {
        const account = "account_rdx12xru8aww4w73rr7r3wrc9nk428jr93efxvwtazen7hs3u43cyl5ssv"
        const rattaResourceAddress = "resource_rdx1t5wuuwfg3uk2y5l88rya553t3v4zyepf7wjekphryw6yepedyf7pug"
        const gateway = new GatewayEzMode
        const balances = await gateway.getAllFungibleAccountBalances(account)
        expect(balances).toBeDefined()
        expect(balances.length).toBe(1)
        const rattaBalance = balances.find((balance) => balance.token.resourceAddress === rattaResourceAddress)
        if (!rattaBalance) {
            throw new Error("No ratta balance found")
        }
        expect(rattaBalance.balance).toBe("1")
        expect(rattaBalance.token.resourceAddress).toBe("resource_rdx1t5wuuwfg3uk2y5l88rya553t3v4zyepf7wjekphryw6yepedyf7pug")
    });
});
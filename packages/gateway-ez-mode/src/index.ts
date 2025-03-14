import {
    GatewayApiClient,
    TransactionStatusResponse,
} from '@radixdlt/babylon-gateway-api-sdk';
import { Account } from './account';
import {
    PollTransactionStatusOptions,
    pollTransactionStatus,
} from './transactionStatus/pollTransactionStatus';
import { defaultGatewayClient } from './gatewayClient';
import {
    TransactionStream,
    TransactionStreamInput,
} from './stream/transactionStream';

type GetTransactionStreamInput = Partial<
    Omit<TransactionStreamInput, 'gateway' | 'stateVersionManager'>
>;
/**
 * A wrapper around the GatewayApiClient that provides
 * a more user-friendly interface for common tasks.
 */
export class GatewayEzMode {
    /**
     * The GatewayApiClient instance used for API calls.
     * @remarks It's public, so you can use it if you need more advanced gateway usage.
     */
    gateway: GatewayApiClient;

    /**
     * Creates a new GatewayEzMode instance.
     * @param gateway Optional GatewayApiClient instance to use for API calls.
     */
    constructor(gateway?: GatewayApiClient) {
        if (gateway) {
            this.gateway = gateway;
        } else {
            this.gateway = defaultGatewayClient();
        }
    }

    /**
     * Instantiates an account object for the given address.
     * @param address The Account address of the account to instantiate an object for.
     * @returns An Account object for the given address.
     */
    getAccount(address: string): Account {
        return new Account(address, this.gateway);
    }

    /**
     * Poll the status of a transaction until it is in a 'final' state, either failed or succeeded.
     * @param transactionId The transaction id / intent hash of the transaction to poll.
     * @param options Options for polling.
     * @returns A promise that resolves with the transaction
     * status as soon as the transaction is in a final state.
     *
     * @example
     * ```typescript
     * const transactionId = sendTransaction();
     * let transactionStatus;
     * try {
     *   transactionStatus = await gatewayEzMode.pollTransactionStatus(transactionId);
     * } catch (error) {
     *   console.error('Failed polling:', error);
     * }
     * console.log("Transaction resolved with status:", transactionStatus);
     * ```
     */
    pollTransactionStatus(
        transactionId: string,
        options?: Omit<PollTransactionStatusOptions, 'gatewayApiClient'>
    ): Promise<TransactionStatusResponse> {
        return pollTransactionStatus(transactionId, {
            ...(options || {}),
            gatewayApiClient: this.gateway,
        });
    }

    /**
     *
     * @param startStateVersion The state version to start streaming from.
     * @param batchSize The maximum number of transactions to fetch per call.
     * @returns A promise that resolves with a TransactionStream class instance.
     */
    async getTransactionStream({
        startStateVersion,
        batchSize,
    }: GetTransactionStreamInput): Promise<TransactionStream> {
        return TransactionStream.create({
            gateway: this.gateway,
            startStateVersion,
            batchSize,
        });
    }
}
export { s } from './sborParse/factory';

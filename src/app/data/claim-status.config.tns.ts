///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Kinvey } from 'kinvey-nativescript-sdk';

import { KinveyServiceConfig } from '@src/app/core/data/kinvey-service-config';
import { ClaimStatus } from '@src/app/data/claim-status.model';

export function getClaimStatusConfig(): KinveyServiceConfig {
    return {
        dataProviderName: 'DefaultDataProvider',
        serverOperations: true,
        createModel: () => new ClaimStatus(),
        collection: 'ClaimStatus',
        dataStoreType: Kinvey.DataStoreType.Network,
        loadOnDemand: true
    };
}

///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { KinveyServiceConfig } from '@src/app/core/data/kinvey-service-config';
import { ClaimType } from '@src/app/data/claim-type.model';

export function getClaimTypeConfig(): KinveyServiceConfig {
    return {
        dataProviderName: 'DefaultDataProvider',
        serverOperations: true,
        createModel: () => new ClaimType(),
        collection: 'ClaimType'
    };
}

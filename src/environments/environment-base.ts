///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { AppConfigService } from '@src/app/core/app-config.service';

export const environmentBase = {
    appId: 'fd0cbdc8-eb31-472c-9a25-928b5bdd3447',
    appName: 'NSDevDay2019',
    getDataProviders() {
        return AppConfigService.settings.dataProviders;
    },
    getAuthentication() {
        return AppConfigService.settings.authentication;
    }
};

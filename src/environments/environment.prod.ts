/////////////////////////////////////////////////////
// Add your custom code here.
// This file and any changes you make to it are preserved every time the app is generated.
/////////////////////////////////////////////////////
import { environmentBase } from '@src/environments/environment-base';

// Change exsting or put different environment settings for production environment
export const environment: any = {
    production: true,
    ...environmentBase
};

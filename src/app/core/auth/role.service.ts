///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Injectable } from '@angular/core';
import { LocalStorageService } from '@src/app/core/local-storage.service';

const KEY = 'USER_ROLES';

@Injectable()
export class RoleService {
    constructor(private storageService: LocalStorageService) {
    }

    getRoles(): string[] {
        return this.storageService.getItem(KEY);
    }

    setRoles(roles: string[]): void {
        this.storageService.setItem(KEY, roles);
    }

    clearRoles(): void {
        this.storageService.removeItem(KEY);
    }
}

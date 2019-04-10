///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AuthenticationProviderInterface {
    isAuthenticated(): Observable<boolean>;
    authenticate(): void;
    completeAuthentication(): Observable<any>;
    authenticateRequest(request: HttpRequest<any>): Observable<HttpRequest<any>>;
    signIn(credentials: any): Observable<void>;
    signOut(): Observable<void>;
    supportsRefresh(): boolean;
    silentRefresh(): Observable<any>;
    signUp?(credentials: any): Observable<any>;
    resetPassword?(email: string, options?: any): Observable<any>;
    signInExternal?(redirectUri?: string, authorizationGrant?: any, options?: any): Observable<any>;
}

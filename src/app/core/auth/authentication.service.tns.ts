///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Inject, Injectable, Injector } from '@angular/core';
import { Observable, of } from 'rxjs';
import { KinveyAuthProvider } from '@src/app/core/auth/providers/kinvey-auth-provider';

class SignInState {
  providerIndex: number;
  returnUrl: string;
  dataProviders: string[];
}

@Injectable()
export class AuthenticationService {
  public activeUser;
  public readonly requireSignIn: boolean;
  private provider: KinveyAuthProvider;

  constructor(@Inject(Injector) injector: Injector) {
    this.provider = new KinveyAuthProvider(null, injector);

    KinveyAuthProvider.activeUser.subscribe(v => this.activeUser = v && v.data);
  }

  public isAuthenticated(): Observable<boolean> {
    return this.provider.isAuthenticated();
  }

  public authenticate(returnUrl?: string): void {
    this.provider.authenticate();
  }

  public authenticateDataProvider(dataProvider: string) {
  }

  public completeAuthentication(): Observable<any> {
    return of(null);
  }

  public authenticateRequest(dataProvider: string, request: any): Observable<any> {
    return of(null);
  }

  public signIn(credentials: any): Observable<void> {
    return this.provider.signIn(credentials);
  }

  public signInExternal(redirectUri?: string, authorizationGrant?: any, options?: any): Observable<any> {
    return this.provider.signInExternal(redirectUri, authorizationGrant, options);
  }

  public signOut(): Observable<void> {
    return this.provider.signOut();
  }

  public signUp(credentials: any): Observable<void> {
    return this.provider.signUp(credentials);
  }

  public resetPassword(email: string, options?: any): Observable<void> {
    return this.provider.resetPassword(email, options);
  }

  public supportsRefresh(dataProvider: string): boolean {
    return false;
  }

  public silentRefresh(dataProvider: string): Observable<any> {
    return of(null);
  }

  public getSigninState(): SignInState {
    return null;
  }
}

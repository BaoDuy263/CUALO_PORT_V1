import { AuthConfig, OAuthModuleConfig } from 'angular-oauth2-oidc';
import { Utilities } from './utilities';
import { environment } from 'src/environments/environment';

export const authConfig: AuthConfig = {
  issuer: environment.authority,
  requireHttps: false,
  oidc: false,

  redirectUri: `${Utilities.baseUrl()}/signin-oidc`,
  postLogoutRedirectUri: `${Utilities.baseUrl()}/signout-callback-oidc`,
  // silentRefreshRedirectUri: `${Utilities.baseUrl()}/silent-refresh.html`,

  clientId: environment.clientId,
  dummyClientSecret:
    '90ad45a969db4da1b0982FC6B946AFB84E65297E2B194FBab22d1ae6aa6ac5df',

  responseType: 'code',
  scope: 'openid profile offline_access apiAdmin apiCCLO',

  showDebugInformation: true,
  sessionChecksEnabled: true,
};

export const authModuleConfig: OAuthModuleConfig = {
  resourceServer: {
    allowedUrls: [Utilities.baseUrl(), environment.CCLOApi],
    sendAccessToken: true,
  },
};

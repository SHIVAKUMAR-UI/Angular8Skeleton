// export interface AuthState {
//     loading: boolean;
//     loginFailed: boolean;
//     logoutPopUpActive: boolean;
//     menuName: string;
//     menuItems: any;
//     clientLogo: any;
//     notifications: any[];
//     teamLogo: any;
//   }

export class Authority {
  authority: string
}

export class ChildFeature {
  version: number;
  isActive: boolean;
  id: number;
  name: string;
  description: string;
  sequence: number;
  parentId: number;
  childFeatures: ChildFeature[]
}

export class Feature {
  version: number;
  isActive: boolean;
  id: number;
  name: string;
  code: string;
  description: string;
  sequence: number;
  parentId: number;
  url: string;
  childFeatures: ChildFeature[]
}

export class Principal	{
  password: string;
  username: string;
  authorities: Authority[];
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  credentialsNonExpired: boolean;
  enabled: boolean;
  userId: number;
  email: string;
  name: string;
  fullName: string;
  gender: string;
  mobilePhone: string;
  homePhone: string;
  otherContact: string;
  identificationType: string;
  identificationNumber: string;
  secondaryEmail: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  postCode: string;
  tenantCode: string;
  orgCode: string;
  orgId: number;
  featureList: Feature[]
}

export class UserResponse {
  authorities: Authority[];
  details: {
      remoteAddress: string;
      sessionId: string;
      tokenValue: string;
      tokenType: string;
      decodedDetails: string
  };
  authenticated: boolean;
  userAuthentication: {
      authorities: Authority[];
      details: {
          grant_type: string;
          username: string
      };
      authenticated: boolean;
      principal: Principal;
      credentials: string;
      name: string
  };
  principal: Principal;
  credentials: string;
  oauth2Request: {
      clientId: string;
      scope: string[];
      requestParameters: {
          grant_type: string;
          username: string
      };
      resourceIds: string[];
      authorities: Authority[];
      approved: boolean;
      refresh: boolean;
      redirectUri: string;
      responseTypes: [];
      extensions: {};
      refreshTokenRequest: string;
      grantType: string
  };
  clientOnly: boolean;
  name: string
}


export class LoginDetails {
  username: string;
  password: string;
}

export class TokenResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  token_type: string;
  scope: string;
}



export const initialState: AuthState = {
  loading: false,
  tokenResponse: {
    access_token: '',
    expires_in: 0,
    refresh_token: '',
    token_type: '',
    scope: ''
  },
  userResponse: {
    authorities: [],
    details: {
        remoteAddress: '',
        sessionId: '',
        tokenValue: '',
        tokenType: '',
        decodedDetails: ''
    },
    authenticated: false,
    userAuthentication: {
        authorities: [],
        details: {
            grant_type: '',
            username: ''
        },
        authenticated: false,
        principal: new Principal,
        credentials: '',
        name: ''
    },
    principal: new Principal,
    credentials: '',
    oauth2Request: {
        clientId: '',
        scope: [],
        requestParameters: {
            grant_type: '',
            username: ''
        },
        resourceIds: [],
        authorities: [],
        approved: false,
        refresh: false,
        redirectUri: '',
        responseTypes: [],
        extensions: {},
        refreshTokenRequest: '',
        grantType: ''
    },
    clientOnly: false,
    name: ''
  },

};

export interface AuthState {
  loading: boolean;
  tokenResponse: TokenResponse;
  userResponse: UserResponse;
}

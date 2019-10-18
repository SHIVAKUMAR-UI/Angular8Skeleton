export interface User {
    userName: string;
}

export interface UserResponse {
    principal: Principal;
    userName: string;
}

export interface Principal {
    user: any;
}
export interface RegisterUserRequest {
    email: string;
    name: string;
    password?: string;
}

export interface RegisterUserResponse {
    id: number;
    email: string;
    name: string;
    [key: string]: any;
}

export interface LoginUserRequest {
    email: string;
    password?: string;
}

export interface UserSessionData {
    id: number;
    email: string;
    name: string;
    created_at?: string;
    updated_at?: string;
}

export interface TokenResponse {
    access: string;
    refresh: string;
}

export interface LoginUserResponse {
    message: string;
    data: UserSessionData;
    tokens: TokenResponse;
}


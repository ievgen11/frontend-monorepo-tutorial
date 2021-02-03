import Storage from "./Storage";
declare enum Tokens {
    ACCESS_TOKEN = "access_token"
}
export default class Authentication extends Storage<Tokens> {
    private static instance?;
    private constructor();
    static getInstance(): Authentication;
    getAccessToken(): string | null;
    setAccessToken(accessToken: string): void;
    isAuthenticated(): boolean;
    clear(): void;
}
export {};

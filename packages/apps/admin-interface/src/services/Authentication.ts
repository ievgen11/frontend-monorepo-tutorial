import Storage from "./Storage";

enum Tokens {
  ACCESS_TOKEN = "access_token",
}

export default class Authentication extends Storage<Tokens> {
  private static instance?: Authentication;

  private constructor() {
    super();
  }

  public static getInstance() {
    if (!this.instance) {
      this.instance = new Authentication();
    }

    return this.instance;
  }

  public getAccessToken() {
    return this.get(Tokens.ACCESS_TOKEN);
  }

  public setAccessToken(accessToken: string) {
    this.set(Tokens.ACCESS_TOKEN, accessToken);
  }

  public isAuthenticated() {
    return this.get(Tokens.ACCESS_TOKEN) !== null;
  }

  public clear() {
    this.clearItems([Tokens.ACCESS_TOKEN]);
  }
}

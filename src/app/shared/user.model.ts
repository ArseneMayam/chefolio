export class User {

    constructor(private _id: number, private _userName: string, private _pwd: string) { }
    //getters and setters
    public get id(): number {
        return this._id;
    }
    public get userName(): string {
        return this._userName;
    }
    public set userName(uname: string) {
        this._userName = uname;
    }
    public get password(): string {
        return this._pwd;
    }
    public set password(pwd: string) {
        this._pwd = pwd;
    }
}
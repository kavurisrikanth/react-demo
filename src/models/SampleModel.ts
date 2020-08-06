export class SampleModel {
    private _email: string;
    private password: string;
    private value: number;

    constructor(
        email: string = '',
        password: string = '',
        value: number = 0
    ) {
        this._email = email;
        this.password = password;
        this.value = value;
    }

    get email() :string {
        return this._email;
    }

    set email(email: string) {
        this._email = email;
    }
}
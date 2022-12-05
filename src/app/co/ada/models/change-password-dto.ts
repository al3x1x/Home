export class ChangePasswordDTO {

    password:String;
    confirmPassword: String;
    tokenPassword: String;

    constructor(password:String, confirmPassword: String, tokenPassword: String ){
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.tokenPassword = tokenPassword;
    }
}

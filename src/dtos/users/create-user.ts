class CreateUserDTO {
    public readonly firstName: string;
    public readonly lastName: string;
    public readonly email: string;
    public readonly password: string;
    public readonly role?: string;
    public readonly birthday: Date;
    public readonly gender?: string;

    // eslint-disable-next-line
    constructor(body: any) {
        this.firstName = body.firstName;
        this.lastName = body.lastName;
        this.email = body.email;
        this.password = body.password;
        this.role = body.role;
        this.birthday = body.birthday;
        this.gender = body.gender;
    }
}

export default CreateUserDTO;
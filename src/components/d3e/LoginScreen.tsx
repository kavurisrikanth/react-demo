import * as React from 'react';

interface LoginScreenProps {
    // Props will contain only non-internal properties

    // Events
    onLogin?: (user: Array<string>) => void;
    onForgotPassword?: () => void;
    onSignup?: () => void;

    // Properties (non-internal)
    email?: string;
    password?: string;
    rememberMe?: boolean;
    errorMessage?: string;
    showError?: boolean;
    hitRequest?: boolean;
    user?: any;
    item1?: string;
    // EditorBooleanStyleType _enumItem = EditorBooleanStyleType.Checkbox;
};

interface LoginScreenState {
    // State will contain only internal properties

    // Properties internal
    email: string;
    password: string;
    rememberMe: boolean;
    errorMessage: string;
    showError: boolean;
    hitRequest: boolean;
    user: any;
    item1: string;
    url: string;
    // EditorBooleanStyleType _enumItem = EditorBooleanStyleType.Checkbox;
};

export class LoginScreen extends React.Component<LoginScreenProps, LoginScreenState> {
    // Q1: Do we use fields or state?
    
    constructor(props: LoginScreenProps) {
        super(props);
        // If we are using state, then we might not need the changes in ObservableState
        this.state = {
            // Since the values passed using tags end up in props, we should assign values from props here.
            // Only internal props here
            email: this.props.email ?? '',
            password: this.props.password ?? '',
            rememberMe: this.props.rememberMe ?? true,
            errorMessage: this.props.errorMessage ?? '',
            showError: this.props.showError ?? false,
            hitRequest: this.props.hitRequest ?? false,
            user: this.props.user ?? null,
            item1: this.props.item1 ?? '',
            url: 'http://place-puppy.com/300x300',
            // enumItem: EditorBooleanStyleType.Checkbox,
        };
        // this.initListeners();
        this.init();
        this.bindEventHandlers();
    }

    initListeners() {
        this.computeUser();
    }

    async computeUser() {
        // Async operation here
        try {
            let user = await this.asyncMethod();
            this.setState({
                user: user
            });
        } catch(e) {
            this.setState({
                user: null
            });
        }
    }

    async asyncMethod(): Promise<any> {
        return null;
    }

    set errorMessage(errorMessage: string) {
        this.setState({
            errorMessage: errorMessage
        });
    }

    get email(): string {
        return this.state.email;
    }

    set email(email: string) {
        this.setState({
            url: 'http://via.placeholder.com/300',
            email: email
        });
        console.log('url after set email: ' + this.state.url);
    }
    
    set password(email: string) {
        this.setState({
            url: 'http://placekitten.com/300/300',
            password: email
        });
    }

    get user(): any {
        // Q2: Why won't this work?
        return null;
    }

    set user(user: any) {
        this.setState({user: user});
    }

    // get email2(): string {
    //     return this._email;
    // }

    // set email2(email: string) {
    //     this._email = email;
    // }

    // set user(user: any) {
    //     this._user = user;
    // }

    render() {
        // TODO
        // return <Center 
        //     child: 
        //     ...
            
        //         <Container (
        //             constraints:
        //                 BoxConstraints(minWidth: 200, maxWidth: 400) 
        //             child: InputField(
        //                 placeHolder: 'Email',
        //                 controller: emailController,
        //                 onChanged: (text) {
        //                 setSateEmail(text);
        //                 })
        //         />
        
        return <div>
            <img src={this.state.url}></img>
            <input type="email" placeholder="Enter Email" name="uname" required  onChange={(e) => this.setSateEmail(e.target.value)} />
            <input type="password" placeholder="Enter Password" name="psw" required onChange={(e) => this.setSatePassword(e.target.value)} />

            <button type="submit" onClick={this.authenticateUser}>Login</button>
        </div>;
        // return <Center></Center>
    }

    private bindEventHandlers() {
        // This is required because not doing this will cause "this" to be undefined when the event handler is invoked.
        this.onForgotPasswordHandler = this.onForgotPasswordHandler.bind(this);
        this.onSignupHandler = this.onSignupHandler.bind(this);
        this.init = this.init.bind(this);
        this.onUserChange = this.onUserChange.bind(this);
        this.setSateEmail = this.setSateEmail.bind(this);
        this.setSatePassword = this.setSatePassword.bind(this);
        this.setSateRememberMe = this.setSateRememberMe.bind(this);
        this.authenticateUser = this.authenticateUser.bind(this);
    }

    /*
    Events
    */
    get onLogin() {
        return this.props.onLogin;
    }

    get onForgotPassword() {
        return this.props.onForgotPassword;
    }

    get onSignup() {
        return this.props.onSignup;
    }

    /* Event Handlers */
    onForgotPasswordHandler() {
        this.onForgotPassword?.();
    }

    onSignupHandler() {
        this.onSignup?.();
    }

    init() {}

    onUserChange() {
        if (this.user != null) {
            this.onLogin?.(this.user);
        }
    }

    setSateEmail(text : string) {
        this.email = text;
    }

    setSatePassword(text: string) {
        this.password = text;
    }

    setSateRememberMe(text: boolean) {
        this.setState({
            rememberMe: text
        });
    }

    authenticateUser() {
        this.setState({
            url: 'http://place-puppy.com/300x300'
        });
        console.log('Trying to log in w/ email: ' + this.state.email + ' and password: ' + this.state.password);
    }
}
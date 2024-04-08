export const validation = (email,password) => {
    const validatedEmail =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    const validatedPassword = /^(?=.*[!@#$%^&*-])(?=.*[0-9])(?=.*[A-Z]).{8,20}$/.test(password);

    if(!validatedEmail) return "Invalid Email"
    if(!validatedPassword) return "Invalid Password"
    return null
} 
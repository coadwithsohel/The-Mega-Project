/* eslint-disable no-useless-catch */
import conf from "../conf/conf";
import{Client,Account,ID}from "appwrite"

export class AuthService{

    client= new Client();
    account

    constructor (){
        this.client 
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email,password,name}){
        try {
        const userAccount =  await this.account.create(ID.unique(), email , password , name);
        if (userAccount) {
        return this.login(email,password)
        } else {
            return userAccount
        }
        } catch (error) {
            console.log("Appwrite service :: userAccount :: error",error);

        }
    }

    async login({email,password}){
        try {
        return await this.account.createEmailSession(email,password)
        } catch (error) {
            console.log("Appwrite service :: login :: error",error);

        }
    }

    async getCurrentUser(){
        try {
            await this.account.get();
        } catch (error) {
        console.log("Appwrite service :: getCurrentUser :: error",error);
        }
        return null;
    }

async logout(){
try {
    await this.account.deleteSessions()
} catch (error) {
    console.log("Appwrite service :: getCurrentUser :: error",error);

}
}

}
const authService = new AuthService();

export default authService



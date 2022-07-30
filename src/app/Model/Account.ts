export interface Account
{
    id: number,
    userName: string,
    fullName: string,
    email: string,
    phoneNumber : string,
    password : string,
   
}

export interface lstAccount
{
    currentPage: number,
    pageSize : number,
    totalRecord : number,
    totalPage: number
    data : Account[]
}


export interface AccountCreate
{
   
    userName: string,
    fullName: string,
    email: string,
    phoneNumber : string,
    password : string,
}



export interface AccountEdit
{
    id: number,
    userName: string,
    fullName: string,
    email: string,
    phoneNumber : string,
    password : string,
}``
export interface Customer
{
    id: number,
    name: string,
    fullName: string,
    phoneNumber: string,
    address : string,
    createdOn : Date,
    modifiedOn : Date,
    createdBy : string,
    modifiedBy : string,
    userId: string,
    description: string
}

export interface lstCutomer
{
    currentPage: number,
    pageSize : number,
    totalRecord : number,
    totalPage: number
    data : Customer[]
}


export interface CustomerCreate
{
   
    name: string,
    fullName: string,
    phoneNumber: string,
    address : string,
    userId: string,
    description: string
}



export interface CustomerEdit
{
    id: number,
    name: string,
    fullName: string,
    phoneNumber: string,
    address : string,
    userId: string,
    description: string
}

export interface CustomerSelect 
{
    id: number,
    name: string,
}
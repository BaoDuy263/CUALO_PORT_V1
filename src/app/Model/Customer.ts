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
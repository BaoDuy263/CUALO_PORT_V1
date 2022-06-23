export interface ProductGroup
{
    id: number,
    name: string,
    note: string,
    createdOn : Date,
    modifiedOn : Date,
    createdBy : string,
    modifiedBy : string,
    // userId: string,
    status: boolean
}


export interface ProductGroupCreate
{
   
    name: string,
    note: string,
    status: boolean
   
}



export interface ProductGroupEdit
{
    id: number,
    name: string,
    note: string,
    status: boolean
}
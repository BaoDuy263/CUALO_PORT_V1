export interface UserLogin {
    userName: string ,
    password : string
}

export interface UserReponse {
    listRole: [],
    jwt : string,
    expiresIn: number,
    refreshToken : string,
    refreshTokenExpiryTime: string,
    errorCode: string,
    message: string,
    userId :string
}
  
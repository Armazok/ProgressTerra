export interface IGenerateTokenRequest {
    "idClient": string,
    "accessToken": string,
    "paramName": string,
    "paramValue": string,
    "latitude": number,
    "longitude": number,
    "sourceQuery": number
}

export interface IGenerateTokenResponse {
    "result": {
    "status": number,
        "message": string,
        "messageDev": string,
        "codeResult": number,
        "duration": number,
        "idLog": string
},
    "accessToken": string
}


export interface IInfoBonusResponse {
    "resultOperation": {
    "status": number,
        "message": string,
        "messageDev": null,
        "codeResult": number,
        "duration": number,
        "idLog": string
    },
    "data": {
    "typeBonusName": string,
        "currentQuantity": number,
        "forBurningQuantity": number,
        "dateBurning": string
    }
}
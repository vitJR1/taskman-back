export const error400 = (msg = "Incorrect keys")=>{
    return {
        status: 400,
        result: {
            "error":msg
        }
    }
}
export const error404 = (msg = "Undefined source") => {
    return{
        status: 404,
        result: {
            error: msg
        },
    }
}
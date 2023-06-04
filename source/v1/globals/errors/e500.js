export const error500 = (msg = "Something went wrong") => {
    return {
        status: 500,
        result: {
            error: msg
        }
    }
}
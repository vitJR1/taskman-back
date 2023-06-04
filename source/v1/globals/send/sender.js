/**
 *
 * */
export const sender = (res, data) => {
    if(typeof data === "function")
        data = data()

    res.status(data.status).send(data.result)
}
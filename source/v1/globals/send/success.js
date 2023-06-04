export const success = (result = {
    status: 'success'
}) => {
    return {
        status: 200,
        result: result
    }
}
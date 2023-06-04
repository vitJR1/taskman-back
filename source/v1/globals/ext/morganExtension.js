export const morganExt = {
    'body': request => JSON.stringify(request.body),
    'query': request => JSON.stringify(request.query),
    'datetime': () => new Date().toJSON()
}
import {decrypt} from "tools-pack/crypt/crypt";
import {sender} from "../source/v1/globals/send/sender";
import {error403} from "../source/v1/globals/errors/e403";
import {error500} from "../source/v1/globals/errors/e500";
import client from "./db";

export const middleSecure = async (req, res, next)=>{

    // TODO token validating
    //  here could be your safety

    //now i just add mango client to request object

    req.mango = client

    next()

    // try {
    //     let token = JSON.parse(decrypt(req.headers.token))
    //     if(!token['somekey'])
    //         return sender(res, error500)
    //     req.token = token;
    //     next()
    // }catch (e){
    //     console.log(e.message)
    //     return sender(res, error403);
    // }

}
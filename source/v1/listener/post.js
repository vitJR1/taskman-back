import {createTask} from "../component/tasks/create";
import {addUser} from "../component/users/create";

export const Post = {

    "/tasks":(req, res)=>createTask(req, res),

    "/users":(req, res)=>addUser(req, res)

}
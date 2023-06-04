import {createTask} from "../component/tasks/create";
import {addUser} from "../component/users/create";

export const Post = {

    "/tasks":createTask,

    "/users":addUser

}
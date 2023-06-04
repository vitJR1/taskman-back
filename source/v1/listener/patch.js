import {deleteTask} from "../component/tasks/delete";
import {deleteUser} from "../component/users/delete";

export const Patch = {

    "/tasks":deleteTask,

    "/users":deleteUser

}
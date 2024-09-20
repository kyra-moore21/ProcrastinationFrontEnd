import { UserModel } from "./user";
export interface TaskModel {
    userid:     number;
    taskid:     number;
    task1:      string;
    deadline:   Date;
    details:    string;
    iscomplete: boolean;
    created:    Date;
    user:       UserModel;
}
import { UserModel } from "./user";
export interface TaskModel {
    userId:     number;
    taskId:     number;
    task1:      string;
    deadline:   Date;
    details:    string;
    isComplete: boolean;
    created:    Date;
    user:       UserModel;
}
import { CommentType } from './enums';

export interface Comment {
    commentKey: number;
    entityKey: number;
    entityTypeKey: number;
    commentType: CommentType;
    commentValue: string;
    addedUserID: string;
    addedDateTime: Date;
    updateUserID: string;
    updateDateTime: Date;
}

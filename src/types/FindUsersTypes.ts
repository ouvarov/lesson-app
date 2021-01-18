export type FindUsersTypes = {
    id: number;
    followed: boolean;
    name: string;
    status: string;
    photos: {
        large: string;
        small: string;
    };
};

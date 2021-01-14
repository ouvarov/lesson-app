export type FindUsersTypes = {
    id: number;
    followed: boolean;
    name: string;
    status: string;
    location: {
        city: string;
        country: string;
    };
    photos: {
        large: string;
        small: string;
    };
};

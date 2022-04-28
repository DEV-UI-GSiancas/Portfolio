export interface CardI{
    avatar?: string;
    photoUrl: string;
    photoId: number;
    category: number;
    ratings: number;
    ratedByMe: number;
    location: string;
    userId: string;
    name: string;
}

export interface UserAccount {
    userId: string;
    isLoggedIn: boolean;
    avatar: string;
    location: string;
}
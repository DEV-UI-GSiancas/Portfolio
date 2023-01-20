export interface UserPhotoCardI {
    photoUrl: string;
    photoId: number;
    category: number;
    ratings: number;
    location: string;
}

export interface UserCardI extends UserPhotoCardI{
    avatar?: string;
    userId: string;
    name: string;
    ratedByMe: number;
}

export interface UserAccountI {
    userId: string;
    isLoggedIn: boolean;
    avatar: string;
    location: string;
}

export interface UserProfileI {
    name: string;
    userId: string;
    avatar: string;
    photos: UserCardI[];
}

export interface UserSettingsI {
    name: string;
    userId: string;
    avatar: string;
    alias: string;
}
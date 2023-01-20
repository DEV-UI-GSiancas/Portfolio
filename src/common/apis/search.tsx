// import {ApisInstance} from '../../common/util/Apis';
import json from '../../json/users.json';

export interface UserSearchI {
    name: string;
    userId: string;
}

export const searchUsers = (search: string): Promise<UserSearchI[]> => {
    return new Promise((resolve) => {
        const searchArr: UserSearchI[] = [];

        json.users.forEach((user) => {
            if(user.name.toLowerCase().indexOf(search.toLocaleLowerCase()) !== -1) {
                searchArr.push({
                    name: user.name , 
                    userId: user.userId
                })
            }  
        })

        resolve(searchArr);
    });
}
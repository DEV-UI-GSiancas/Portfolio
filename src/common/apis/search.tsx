// import {ApisInstance} from '../../common/util/Apis';
import json from '../../json/users.json';

export const searchUsers = (search: string) => {
    return new Promise((resolve) => {
        const searched = json.users.filter((user) =>
            user.name.includes(search)
        )
        resolve(searched);
    });
}
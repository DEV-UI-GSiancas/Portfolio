// import {ApisInstance} from '../../common/util/Apis';
import json from '../../json/users.json';

export const getContestantsNearBy = () => {
    return new Promise((resolve) => {
        resolve(json.users);
    });
}
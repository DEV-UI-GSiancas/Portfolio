// import {ApisInstance} from '../../common/util/Apis';
import json from '../../json/users.json';
import {UserProfileI, UserSettingsI} from '../util/App.dto';

export const getUserProfileInfo = (userId: string): Promise<UserProfileI> => {
    return new Promise((resolve) => {
        resolve({
            name: "Gino Siancas R.",
            userId: userId,
            avatar: "https://scontent.flim8-1.fna.fbcdn.net/v/t39.30808-6/270137962_2390247757777443_8350522061826342150_n.jpg?stp=dst-jpg_p843x403&_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeG8P5qFT6D_aU7ocPovXxBvQHrm5Vb1pYFAeublVvWlgYUR7sACyOoQvnfqdafBGUVHIRRGvI6UcX-Vh9ES2Thn&_nc_ohc=hsF4puoWSf8AX-S7OEl&_nc_oc=AQmesveazJ56Q83lOrji9PntiVwAJ9PLQIOylAzSwcMhLpuT61kwn3esK4LrGXI8wd8&_nc_ht=scontent.flim8-1.fna&oh=00_AT96WO0P_tIFEzgSQJmGkuWqvT0fHBkKOO7vsZAPO5qBcw&oe=626F2ECB",
            photos: json.users.reverse()
        });
    });
}

export const getUserSettingsInfo = (): Promise<UserSettingsI> => {
    return new Promise((resolve) => {
        resolve({
            name: "Gino Siancas",
            userId: "ff2-ffe-21-d1d-12121d--d1",
            avatar: "https://scontent.flim8-1.fna.fbcdn.net/v/t39.30808-6/270137962_2390247757777443_8350522061826342150_n.jpg?stp=dst-jpg_p843x403&_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeG8P5qFT6D_aU7ocPovXxBvQHrm5Vb1pYFAeublVvWlgYUR7sACyOoQvnfqdafBGUVHIRRGvI6UcX-Vh9ES2Thn&_nc_ohc=hsF4puoWSf8AX-S7OEl&_nc_oc=AQmesveazJ56Q83lOrji9PntiVwAJ9PLQIOylAzSwcMhLpuT61kwn3esK4LrGXI8wd8&_nc_ht=scontent.flim8-1.fna&oh=00_AT96WO0P_tIFEzgSQJmGkuWqvT0fHBkKOO7vsZAPO5qBcw&oe=626F2ECB",
            alias: "DevGSiancas",
        });
    });
}




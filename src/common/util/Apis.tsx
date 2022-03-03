import { AxiosInstance } from "axios"

class Apis {

    // this technically could be undefined, but let's ignore this for ease of use and testing...
    // @ts-ignore
    private axiosInst: AxiosInstance;

    init = (axionsInstance: AxiosInstance) => {
        this.axiosInst = axionsInstance;
    }

    get = async (url: string) => {
        const res = await this.axiosInst.get(url);
        return res.data;
    }
}

export const ApisInstance = new Apis();
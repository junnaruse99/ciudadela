import clientAxios from "@/config/axios";
import { IHumanData } from "@/interfaces/IHuman";
import { IPagination } from "@/interfaces/IPagination";

class HumanService {
    static async getHumans(pagination: IPagination) {
        return clientAxios.get<IHumanData>(`/human?page=${pagination.page}`);
    }
}

export default HumanService;
import axios, {AxiosPromise} from "axios";

interface HasId {
    id?: number;
}

export class ApiSync<T extends HasId> {
    constructor(public rootUrl: string) {
    }

    fetch(id: number): AxiosPromise {
        return axios.get(`${this.rootUrl}/${id}`);
    }

    save(data: T): AxiosPromise {
        const {id} = data;
        if (id) {
            // do an update (put) since id is included
            return axios.put(`${this.rootUrl}/${id}`, data);
        } else {
            // create a new post
            return axios.post(this.rootUrl, data);
        }
    }
}
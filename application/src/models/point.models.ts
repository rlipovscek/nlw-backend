import { ResponseItem } from "./item-response.model";

export default class Point {
    public id: number;
    public image: string;
    public  name: string;
    public  email: string;
    public  whatsapp: string;
    public latitude: string;
    public longitude: string;
    public  city: string;
    public  uf: string;
    public  items: Array<number> | Array<ResponseItem>;
};
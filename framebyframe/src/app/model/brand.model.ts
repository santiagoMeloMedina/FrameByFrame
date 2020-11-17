
import { Deserealizable } from './deserealize.model';

export class Brand implements Deserealizable {

    private id: number;
    private content: Object;

    constructor() {}

    public deserealize(data: any): this {
        this.id = data['id'];
        this.content = data['content'];
        return this;
    }

    public getId(): number {
        return this.id;
    }

    public getContent(): Object {
        return this.content;
    }
}
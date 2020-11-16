
import { Deserealizable } from 'src/app/model/deserealize.model';

export class Category implements Deserealizable {

    private id: number;
    private name: string;

    constructor() {}

    public deserealize(data: any): this {
        this.id = data['id'];
        this.name = data['name'];
        return this;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }
}
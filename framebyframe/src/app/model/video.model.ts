
import { Category } from 'src/app/model/category.model';
import { Deserealizable } from 'src/app/model/deserealize.model';

export class Video implements Deserealizable {

    private id: number;
    private category: Category;
    private content: Object;

    constructor() {}

    public deserealize(data: any): this {
        this.id = data['id'];
        this.category = new Category().deserealize(data['category']);
        this.content = data['content'];
        return this;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public setContent(content: Object): void {
        this.content = content;
    }

    public setCategory(category: Category): void {
        this.category = category;
    }

    public getId(): number {
        return this.id;
    }

    public getCategory(): Category {
        return this.category;
    }

    public getContent(): Object {
        return this.content;
    }
}
import { Category } from "./category";

export class Todo{
    constructor(public id:String,
        public title:String,
        public body:String,
        public state:String,
        public category:Category){}
}
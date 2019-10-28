import {observable} from 'mobx';

export default class Todo {
    id!: number;
    @observable title!: string;
    @observable done!: boolean;

}
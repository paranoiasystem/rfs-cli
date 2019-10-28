import {decorate, observable} from "mobx"
export default class Store {
    @observable todos = []
}
import { App } from './app.component'
import { container } from 'tsyringe';

export default container.resolve(App);
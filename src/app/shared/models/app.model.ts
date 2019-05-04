import { Subscription } from './subscription';

export interface App {
    id: string,
    name: string,
    description: string,
    categories : Array<string>,
    subscriptions: Subscription
}

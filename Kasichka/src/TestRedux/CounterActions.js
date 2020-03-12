import { COUNTER_CHANGE } from './CounterConstants';

export function changeCount(count) {
    return {
        type: COUNTER_CHANGE,
        payload: count
    }
}
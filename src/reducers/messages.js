import {getMessages} from '../data/static-data';

export default function messages(state = getMessages(100), action){
    return state
}

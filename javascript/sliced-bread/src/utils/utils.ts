import {MAX_QUANTITY, NAMES} from "../constants/randomList.constant";


const randomNumber = (number: number) => {
    return Math.floor(Math.random() * number);
}
export const generateRandomName = () => {
    return NAMES[randomNumber(NAMES.length)];
}


export const generateRandomQuantity = () => {
    return randomNumber(MAX_QUANTITY);
}
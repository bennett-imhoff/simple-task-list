export interface Task {
    id?: number; //Cuando creamos el id podría no venir
    text: string;
    day: string;
    reminder: boolean;
}
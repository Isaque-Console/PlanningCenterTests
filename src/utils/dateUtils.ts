import dayjs from 'dayjs';

export const getDayOfTheWeek = (): string => {
    const daysOfTheWeek = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];

    return "Domingo";
}

/**
 * @return Must return the difference in weeks between the current date and the day of the week constant 
 */
export const subtractDate = (dayOfTheWeek: string): number => {

    return 3;
}

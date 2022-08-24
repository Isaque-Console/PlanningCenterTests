
/**
 * @description filter array of items by title
 * 
 * @param request An object that contains event datas
 * @param title The title from activity that i want
 * @returns a string that contains the item description
 */
export const getDescriptionByTitle = async (response: any, title: Array<string>): Promise<string> => {
    const description = await response.data.data.filter((activity: any) => {
        if (activity) {
            const titleWithoutAccent: string = activity.attributes.title.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
            if (title.includes(titleWithoutAccent)) {
                return activity.attributes.description;
            }
        }
    });

    return description[0].attributes.description;
}

export const convertDescriptionToArray = (description: string): Array<string> => {
    const splittedArray: string[] = description.split("\n");    
    let arrayOfNames: string[] = verifyIfIsName(splittedArray);

    return arrayOfNames;
}

export const verifyIfIsName = (splittedByLineBreak: string[]): string[] => {
    let arrayOfNames: string[] = [];

    splittedByLineBreak.forEach(name => {
        console.log(name);
        
        if (name.trim()[0] === "-") {           
            arrayOfNames.push(name.replace("-", "").trim().slice(0,name.length));
        }
    })

    return arrayOfNames;
}

export const fixBigStrings = (name: string): string => {
    let fixedString: string = name;
    if (name.length > 14) {
        fixedString = name.slice(0, 12);
        fixedString += "...";
    }

    return fixedString;
}

export const getSecondName = (splittedName: string[]): string => {
    const secondNames: string[] = splittedName.slice(1, splittedName.length + 1);
    const secondName = secondNames.join(" ");

    return secondName;
}
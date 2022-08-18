import dayjs from 'dayjs';
import { getDayOfTheWeek, subtractDate } from "../utils/dateUtils"

const todaysServiceTypeGenerator = (): string => {
   return "DOMINGO_NOITE";
}

const todaysPlanIdGenerator = (todaysServiceType: any): number => {
   const dayOfTheWeek: string = getDayOfTheWeek();

   if(!dayOfTheWeek.length) return 0;

   const diffenrenceInWeeks: number = subtractDate(dayOfTheWeek);
   if(diffenrenceInWeeks === -1) return diffenrenceInWeeks;
   const planId = process.env[`PLAN_ID_${todaysServiceType}`] ? process.env[`PLAN_ID_${todaysServiceType}`] : "0";;
   const todaysPlanId: number = diffenrenceInWeeks + Number(planId);

   return todaysPlanId;
}

export const generateURL = (): string => {
   const serviceType = todaysServiceTypeGenerator();
   const todaysPlanId: number = todaysPlanIdGenerator(serviceType);

   if (!serviceType.length || todaysPlanId === -1) return "Hoje não tem nenhum evento."

   return `/services/v2/service_types/${process.env[`SERVICE_TYPE_${serviceType}`]}/plans/${todaysPlanId}/items`;
}

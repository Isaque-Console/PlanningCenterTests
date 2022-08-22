"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateURL = void 0;
const dateUtils_1 = require("../utils/dateUtils");
const todaysServiceTypeGenerator = () => {
    return "DOMINGO_NOITE";
};
const todaysPlanIdGenerator = (todaysServiceType) => {
    const dayOfTheWeek = (0, dateUtils_1.getDayOfTheWeek)();
    if (!dayOfTheWeek.length)
        return 0;
    const diffenrenceInWeeks = (0, dateUtils_1.subtractDate)(dayOfTheWeek);
    if (diffenrenceInWeeks === -1)
        return diffenrenceInWeeks;
    const planId = process.env[`PLAN_ID_${todaysServiceType}`] ? process.env[`PLAN_ID_${todaysServiceType}`] : "0";
    ;
    const todaysPlanId = diffenrenceInWeeks + Number(planId);
    return todaysPlanId;
};
const generateURL = () => {
    const serviceType = todaysServiceTypeGenerator();
    const todaysPlanId = todaysPlanIdGenerator(serviceType);
    if (!serviceType.length || todaysPlanId === -1)
        return "Hoje não tem nenhum evento.";
    return `/services/v2/service_types/${process.env[`SERVICE_TYPE_${serviceType}`]}/plans/${todaysPlanId}/items`;
};
exports.generateURL = generateURL;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDescription = void 0;
const axiosConfig_1 = __importDefault(require("../config/axios/axiosConfig"));
const filterUtils_1 = require("../utils/filterUtils");
/**
 * @description Get event datas from planning center and filter by title
 *
 * @returns a string that contains the item description
 */
const getDescription = () => __awaiter(void 0, void 0, void 0, function* () {
    let description = "";
    yield (() => {
        axiosConfig_1.default.get("/services/v2/service_types/963957/plans/59630660/items")
            .then(response => {
            description = (0, filterUtils_1.getDescriptionByTitle)(response, "intercessão");
            console.log(description);
        })
            .catch(err => {
            console.error("Ops! ocorreu um erro " + err);
        });
    })();
    return description;
});
exports.getDescription = getDescription;

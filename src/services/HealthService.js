"use strict";
import axios from "axios";
import moment from "moment";
import {sortDatasetBasedonTime} from "../helpers/helperFunc";

export default class HealthService{
    constructor(){
    }

    static async getHealthData(type, sortCriteria){
        try {
            const response = await axios.get('https://run.mocky.io/v3/7970855d-c5da-429f-a923-8637969ae865');
            const dataSet = await response.data;
            let  filteredData;

            if (type === "w"){
                filteredData = dataSet.filter((data) => data.type === 'WEIGHT');
            }

            if (type === "p"){
                filteredData = dataSet.filter((data) => data.type === 'PULSE');
            }

            if (type === "t"){
                filteredData = dataSet.filter((data) => data.type === 'TEMPERATURE');
            }

            filteredData.sort(function(a,b){
                return new Date(b.timestamp) - new Date(a.timestamp);
            });

            if (sortCriteria !== undefined && sortCriteria.opt >= 1) {
                filteredData = sortDatasetBasedonTime(filteredData, sortCriteria.opt);
            }

            return filteredData;

        } catch (error) {
            console.error(error);
        }
    }



}
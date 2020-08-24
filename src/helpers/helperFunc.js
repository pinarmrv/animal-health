
export  function sortDatasetBasedonTime (dataSet, criteria) {

    let today = new Date();

    switch (criteria) {

        case 1: {
            let old_year = today.getFullYear() - 1;
            let old_date = today.setFullYear(old_year);
            let filtered = dataSet.filter((data) =>
                (new Date (data.timestamp)) >= old_date);
            return filtered;
        }

        case 2: {
            let old_date = today.setMonth(today.getMonth() - 6);
            let filtered = dataSet.filter((data) =>
                ((new Date (data.timestamp))  >= old_date));
            return filtered;
        }

        case 3: {
            let old_date = today.setMonth(today.getMonth() - 3);
            let filtered = dataSet.filter((data) =>
                ((new Date (data.timestamp))  >= old_date));
            return filtered;
        }

        case 4: {
            let old_date = today.setMonth(today.getMonth() - 1);
            let filtered = dataSet.filter((data) =>
                ((new Date (data.timestamp))  >= old_date));
            return filtered;
        }

        case 5: return dataSet;


    }

}
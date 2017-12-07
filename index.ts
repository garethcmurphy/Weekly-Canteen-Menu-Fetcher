var currentWeekNumber = require('current-week-number');

class Scraper {
    currentWeekNumber: any;
    url: any;

    set_url() {
        this.url = "https://bistropol.simplycooking.dk/ugemenu/uge-";
    };

    show_week() {
        console.log(this.currentWeekNumber());
    };
};

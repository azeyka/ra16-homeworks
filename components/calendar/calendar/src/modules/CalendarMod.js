export default function CalendarMod(date) {
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1),
          calendar = [];

    let currDate = firstDayOfMonth;;
        if (firstDayOfMonth.getDay() !== 1) {
            const diff = firstDayOfMonth.getDay() === 0 ? 6 : firstDayOfMonth.getDay() - 1
            currDate = new Date(firstDayOfMonth.getFullYear(), firstDayOfMonth.getMonth(), firstDayOfMonth.getDate(), -24*diff)
        };
        
        const weeksCount = weeksCountInMonth(firstDayOfMonth);
        for (let week = 0; week < weeksCount; week++) {
            const currWeek = [];
            for (let weekday = 0; weekday < 7; weekday++) {
                currWeek.push(currDate);
                currDate = new Date(currDate.getFullYear(), currDate.getMonth(), currDate.getDate(), 24);
            }
            calendar.push(currWeek);
        };

    return calendar;
}

function daysCountInMonth(date) {
    return new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
};

function weeksCountInMonth(date){
    if ((date.getDay() > 5 || date.getDay() === 0) && 
        daysCountInMonth(date) >= 30) {
        return 6;
    } else {
        return 5;
    };
};
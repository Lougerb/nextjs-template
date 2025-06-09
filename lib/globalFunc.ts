import { join } from "path";

const listMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
const listDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


export function getDateTime (date: Date) {

    const _hour = date.getHours();
    const _minute = date.getMinutes().toString().padStart(2, '0');

    const _day = listDays[date.getDay()];
    const _month = listMonths[date.getMonth()];
    const _date = date.getDate().toString().padStart(2, '0');
    const _year = date.getFullYear();

    const ampm = _hour >= 12 ? 'PM' : 'AM';
    const twelveHour = _hour > 12 ? (_hour - 12).toString().padStart(2, '0') : _hour.toString().padStart(2, '0')  ;

    // Format Day, Month Date, Year · Hour: Minute : 

    return `${_day}, ${_month} ${_date}, ${_year} · ${twelveHour}:${_minute} ${ampm}`;
}

export function getDateOnly (date: Date, format: string = 'MM/DD/YY') {
    const _month = (date.getMonth() + 1).toString().padStart(2, '0');
    const _date = date.getDate().toString().padStart(2, '0');
    const _year = date.getFullYear().toString();

    var regex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    const getSpecialChar = `${format.match(regex)}`;
    const getFormatOrder = format.split(getSpecialChar);
    let newFormat:string[] = [];
    

    getFormatOrder.forEach(e=>{
        
        switch (e.toLowerCase()) {
            case 'mm':
                newFormat.push(_month);
            break;
            case 'dd':
                newFormat.push(_date);
            break;
            case 'yy':
                newFormat.push(_year.padStart(2, '0'));
            break;
            case 'yyyy':
                newFormat.push(_year);
            break;
        
            default:
                break;
        }
    });
    const joinDate = newFormat.join(getSpecialChar);
    return joinDate;
}
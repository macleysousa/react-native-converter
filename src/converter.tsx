
import * as Localization from 'expo-localization';

export const numberToString = (value: number, format: 'N0' | 'N1' | 'N2' | 'N3' | 'N4' = 'N0') => {
    /**
     * N0 => ex: 1.000
     * N1 => ex: 1.000,0
     * N2 => ex: 1.000,00
     * N3 => ex: 1.000,000
     * N4 => ex: 1.000,0000
     */

    let result: string;

    switch (format) {
        case 'N0':
            result = value.toFixed(0).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
            break;
        case 'N1':
            result = value.toFixed(1).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
            break;
        case 'N2':
            result = value.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
            break;
        case 'N3':
            result = value.toFixed(3).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
            break;
        case 'N4':
            result = value.toFixed(4).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
            break;
    }
    return result;
}

type locale = 'en-US' | 'pt-BR';
const months_pt_br = ['', 'Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Septembro', 'Outubro', 'Novembro', 'Dezembro'];
const months_en_us = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
type FomatDate = 'd' | 'g' | 'G' | 'M' | 'M3' | 't' | 'T';
export const dateToString = (value: Date, format: FomatDate = 'd', locale?: locale) => {
    /*
    global
    t => hh:mm
    T => hh:mm:ss

    en-US 
    d =>  'yyyy/MM/dd'  ex: 2020/01/02
    g =>  'yyyy/MM/dd hh:mm'  ex: 2020/01/02 13:30
    G =>  'yyyy/MM/dd hh:mm'  ex: 2020/01/02 13:30:12
    M =>  'dd MM' ex: 01 January
    M3 =>  'dd MM' ex: 01 Jan

    pt-BR 
    d =>  'dd/MM/yyyy'  ex: 02/01/2020
    g =>  'dd/MM/yyyy hh:mm'  ex: 2020/01/02 13:30
    G =>  'dd/MM/yyyy hh:mm'  ex: 2020/01/02 13:30:12
    M =>  'dd MM' ex: 01 Janeiro
    M3 => 'dd MM' ex: 01 Jan
    */

    let result: string;
    var lang: locale = locale || Localization.locales.toString();
    const year = value.toJSON().substring(0, 4);
    const month = value.toJSON().substring(5, 7);
    const day = value.toJSON().substring(8, 10);
    const hours = value.toJSON().substring(11, 13);
    const minutes = value.toJSON().substring(14, 16);
    const seconds = value.toJSON().substring(17, 19);
    const milliseconds = value.toJSON().substring(20, 22);

    var months: any;
    switch (lang) {
        case 'en-US':
            months = months_en_us;
            break;
        case 'pt-BR':
            months = months_pt_br;
            break;
    }

    switch (format) {
        case 't':
            result = `${hours}:${minutes}`;
            break;
        case 'T':
            result = `${hours}:${minutes}:${seconds}`;
            break;
        case 'd':
            switch (lang) {
                case 'pt-BR':
                    result = `${day}/${month}/${year}`;
                    break;
                case 'en-US':
                    result = `${year}/${month}/${day}`;
                    break;
            }
            break;
        case 'g':
            switch (lang) {
                case 'pt-BR':
                    result = `${day}/${month}/${year} ${hours}:${minutes}`;
                    break;
                case 'en-US':
                    result = `${year}/${month}/${day} ${hours}:${minutes}`;
                    break;
            }
            break;
        case 'G':
            switch (lang) {
                case 'pt-BR':
                    result = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
                    break;
                case 'en-US':
                    result = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
                    break;
            }
            break;
        case 'M':
            switch (lang) {
                case 'pt-BR':
                    result = `${day} ${months[Number(month)]}`;
                    break;
                case 'en-US':
                    result = `${day} ${months[Number(month)]}`;
                    break;
            }
            break;
        case 'M3':
            switch (lang) {
                case 'pt-BR':
                    result = `${day} ${months[Number(month)].substring(0, 3)}`;
                    break;
                case 'en-US':
                    result = `${day} ${months[Number(month)].substring(0, 3)}`;
                    break;
            }
            break;
    }
    return result;
}
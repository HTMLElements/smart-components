/// <reference path="../../../source/typescript/smart.elements.d.ts" />
const chemicalElementsData = [
    { number: 1, name: 'Hydrogen', symbol: 'H', weight: 1.008, abundance: 1400 },
    { number: 2, name: 'Helium', symbol: 'He', weight: 4.002602, abundance: 0.008 },
    { number: 3, name: 'Lithium', symbol: 'Li', weight: 6.94, abundance: 20 },
    { number: 4, name: 'Beryllium', symbol: 'Be', weight: 9.0121831, abundance: 2.8 },
    { number: 5, name: 'Boron', symbol: 'B', weight: 10.81, abundance: 10 },
    { number: 6, name: 'Carbon', symbol: 'C', weight: 12.011, abundance: 200 },
    { number: 7, name: 'Nitrogen', symbol: 'N', weight: 14.007, abundance: 19 },
    { number: 8, name: 'Oxygen', symbol: 'O', weight: 15.999, abundance: 461000 },
    { number: 9, name: 'Fluorine', symbol: 'F', weight: 18.998403163, abundance: 585 },
    { number: 10, name: 'Neon', symbol: 'Ne', weight: 20.1797, abundance: 0.005 }
], dictionary = {
    'Hydrogen': 'Водород',
    'Helium': 'Хелий',
    'Lithium': 'Литий',
    'Beryllium': 'Берилий',
    'Boron': 'Бор',
    'Carbon': 'Въглерод',
    'Nitrogen': 'Азот',
    'Oxygen': 'Кислород',
    'Fluorine': 'Флуор',
    'Neon': 'Неон'
};
window.Smart('#table', class {
    get properties() {
        return {
            dataSource: new window.Smart.DataAdapter({
                dataSource: chemicalElementsData,
                dataFields: [
                    'number: number',
                    'name: string',
                    'symbol: string',
                    'weight: number',
                    'abundance: number'
                ]
            }),
            sortMode: 'one',
            columns: [
                { label: 'Атомен номер', dataField: 'number', dataType: 'number' },
                {
                    label: 'Име', dataField: 'name', dataType: 'string', transform: function (value) {
                        return dictionary[value];
                    }
                },
                { label: 'Химичен знак', dataField: 'symbol', dataType: 'string' },
                { label: 'Относителна атомна маса', dataField: 'weight', dataType: 'number' },
                {
                    label: 'Изобилие', dataField: 'abundance', dataType: 'number', formatFunction(settings) {
                        settings.template = settings.value + ' мг/кг';
                    }
                }
            ]
        };
    }
});
window.onload = function () {
    document.getElementById('table').sortBy('name', 'desc');
};

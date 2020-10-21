/// <reference path="../../../source/typescript/smart.elements.d.ts" />

import { Table } from "../../../source/typescript/smart.elements"

declare global {
    export interface Window {
        generateData: (rowscount: number) => any[];
    }
}

window.Smart('#table', class {
    get properties() {
        return {
            dataSource: new window.Smart.DataAdapter(
                {
                    dataSource: window.generateData(10),
                    dataFields:
                        [
                            'id: number',
                            'productName: string',
                            'quantity: number',
                            'price: number',
                            'date: date'
                        ]
                }),
            editing: true,
            editMode: 'cell',
            columns: [
                { label: 'id', dataField: 'id', dataType: 'number' },
                {
                    label: 'Product Name', dataField: 'productName', dataType: 'string', validation(value: any) {
                        if (value === '') {
                            return { message: 'Product name is required!' };
                        }

                        return true;
                    }
                },
                {
                    label: 'Quantity', dataField: 'quantity', dataType: 'number', validation(value: any) {
                        if (isNaN(value) || value <= 5) {
                            return { message: 'Quantity has to be larger than 5!' };
                        }

                        return true;
                    }
                },
                {
                    label: 'Price', dataField: 'price', dataType: 'number', validation(value: any) {
                        if (isNaN(value) || value <= 0) {
                            return false;
                        }

                        return true;
                    }
                },
                {
                    label: 'Date Purchased', dataField: 'date', dataType: 'date', validation(value: any) {
                        if (value.getTime() > new Date().getTime()) {
                            return false;
                        }

                        return true;
                    }
                }
            ]
        };
    }
});

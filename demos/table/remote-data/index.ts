/// <reference path="../../../source/typescript/smart.elements.d.ts" />

import { Table } from "../../../source/typescript/smart.elements"

window.Smart('#table', class {
    get properties() {
        return {
            dataSource: new window.Smart.DataAdapter(
                {
                    virtualDataSourceLength: 500,
                    virtualDataSourceCache: true,
                    virtualDataSource: function (resultCallbackFunction: Function, details: { first: number, last: number }) {
                        fetch('https://randomuser.me/api/?results=' + (details.last - details.first))
                            .then(response => response.json())
                            .then(json => {
                                const data = json.results.map((result: any) => {
                                    return {
                                        title: result.name.title,
                                        firstName: result.name.first,
                                        lastName: result.name.last,
                                        phone: result.phone
                                    };
                                });

                                resultCallbackFunction(
                                    {
                                        dataSource: data,
                                        virtualDataSourceLength: 500
                                    }
                                );
                            });
                    },
                    dataFields:
                        [
                            'title: string',
                            'firstName: string',
                            'lastName: string',
                            'phone: string'
                        ]
                }),
            paging: true,
            pageIndex: 0,
            pageSize: 10,
            columns: [
                { label: 'Title', dataField: 'title', dataType: 'string' },
                { label: 'First Name', dataField: 'firstName', dataType: 'string' },
                { label: 'Last Name', dataField: 'lastName', dataType: 'string' },
                { label: 'Phone', dataField: 'phone', dataType: 'string' }
            ]
        };
    }
});

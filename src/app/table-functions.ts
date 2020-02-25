import { IContent, IHeader } from './interfaces/table';

export class FilterTableClass {
    public static filterTable(content: IContent[], filters) {
        let keys = Object.keys(filters);
        keys.forEach(key => {
            if (key === 'name' && filters["name"].length > 0) {
                content = content.filter(item => {
                    if (filters["name"].includes(item.name)) {
                        return item;
                    }
                });
            } else if (key !== 'name' && filters[key] !== '') {
                content = content.filter(item => {
                    return item[key].toLocaleLowerCase().indexOf(filters[key].toLocaleLowerCase()) !== -1;
                });
            }
        });
        return content;
    }
}
export class SetColumnsClass {
    public static addToArray(columns, fixedColumns, headerContent: IHeader[]) {
        fixedColumns.forEach(element => {
            switch (element.side) {
                case "left":
                    columns.forEach(column => {
                        if (column.key === element.key) {
                            column.fixedSide = "left";
                            headerContent.unshift(column);
                        }
                    });
                    break;
                case "right":
                    columns.forEach(column => {
                        if (column.key === element.key) {
                            column.fixedSide = "right";
                            headerContent.push(column);
                        }
                    });
                default:
                    break;
            }
        });
        return headerContent;
    }
}
/**
 * @author M.Shashikant(shashikant.mittapelli@accoliteindia.com)
 *
 * Model for Datatable helper
 *
 * @property title - to provide custom title
 *
 * dataHelper: DataTableHelper[] = [ {title: 'Column1', useSort: true},
 *  {title: 'Column2', useSort: true}, {title: 'Column3', useSort: false} ]
 *
 */

export class DataTableHelper {
  title: string;
  useSort: boolean = false;
}

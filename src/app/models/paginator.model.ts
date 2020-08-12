export interface PaginatorModel {


  id: number;
  // tslint:disable-next-line:ban-types
  dates: Object;
  page: number;
  results: Array<any>;
  total_pages: number;
  total_results: number;

}

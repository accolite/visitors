export class ArrayUtil {

  static isEmpty( arr: Array<any> ) {
    return arr && arr.length <= 0;
  }

  static isNotEmpty( arr: Array<any> ) {
    return arr && arr.length > 0;
  }

  static first( arr: Array<any> ) {
    return ArrayUtil.isNotEmpty( arr ) ? arr[ 0 ] : [];
  }


}
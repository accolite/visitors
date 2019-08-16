/**
 * @author M.Shashikant(shashikant.mittapelli@accoliteindia.com)
 * Model For getting websocket data
 */

export class NotificationModel {
  action: string;
  message: string;
  [ propName: string ]: any;

  constructor( jsonObj: any ) {
    Object.assign( this, jsonObj && jsonObj.body ? JSON.parse( jsonObj.body ) : {} )
  }
}
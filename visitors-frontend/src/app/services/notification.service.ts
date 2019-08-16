/**
 * @author M.Shashikant(shashikant.mittapelli@accoliteindia.com)
 * Help to catch the event and send the response recieved from the Server
 */

import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable( {
  providedIn: 'root'
} )

export class NotificationService {

  private serverUrl = 'http://13.233.40.37:8081/visitor'
  private stompClient;
  messages$: Subject<any> = new Subject();
  constructor() {
    this.initializeWebSocketConnection();
  }

  private initializeWebSocketConnection() {
    let ws = new SockJS( this.serverUrl );
    this.stompClient = Stomp.over( ws );
    let _this = this;
    this.stompClient.connect( {}, function ( frame ) {
      // console.clear();
      _this.stompClient.subscribe( "/visit/status", ( message ) => {
        // console.clear();
        _this.messages$.next( message );
      } );
    } );
  }

  sendMessage( data: any, priority: number = 5 ) {
    let value: string = typeof data === "object" ? JSON.stringify( data ) : data
    try {
      this.stompClient.send( "/visit/status", { priority: priority }, value );
    } catch {
      console.warn( 'Connection is not ready' )
    }
  }

}
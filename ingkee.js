/**
 * Created by deng on 16-7-24.
 */

var WebSocketClient = require('websocket').client;

var client = new WebSocketClient();

client.on('connectFailed', function(error) {
    console.log('Connect Error: ' + error.toString());
});

client.on('connect', function(connection) {

    console.log('WebSocket Client Connected');
    connection.on('error', function(error) {
        console.log("Connection Error: " + error.toString());
    });
    connection.on('close', function() {
        console.log('echo-protocol Connection Closed');
    });
    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            var data = message.utf8Data;
            console.log(data);
            var ts = data.slice(0,4);


            switch (ts){
                case "1:::":
                    break;
                case "2:::":
                    break;
                case "3:::":
                    break;
                case "4:::":
                    break;
                case "5:::":
                    break;
                case "7:::":
                    console.log("信息过期鸟,seeyou lala");
                    break;
                default:
                    break;

            }
        }
    });
     function sendData(data) {
         try {
             if (connection.connected) {

                 connection.send((data));
             }
         }catch (e){
             console.log(e.message);
         }

     }
     setInterval(function(){
         sendData();
     }, 45000);
     //function sendNumber() {
     //    if (connection.connected) {
     //        var number = Math.round(Math.random() * 0xFFFFFF);
     //        connection.sendUTF(number.toString());
     //        setTimeout(sendNumber, 1000);
     //    }
     //}
    // sendNumber();
});

client.connect("ws://101.201.58.182:81/socket.io/1/websocket/EovZO_GzysSmkz-a6OW1?lc=3000000000006209&cv=IK2.9.60_Android&cc=TG36008&ua=XiaomiMi-4c&uid=149696793&sid=20VsFCXhgzH4REZWY7JgnENMQ4jaVZmIvFhHMzotouaSRpkoxq&devi=867830023366935&imsi=460030131043237&imei=867830023366935&icc=89860316750100568567&conn=WIFI&vv=1.0.3-2016060211417.android&aid=5466454e28138421&osversion=android_22&proto=4&smid=DuQc%2FM%2FITqFgsGvYx4g4isi4vLageGtmr%2FnkA%2BfdlpKUoLmJMhd3ejRtfO1vG3eKK8JNuGD6M38mudxLU2sGU31Q&city=");
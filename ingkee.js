/**
 * Created by deng on 16-7-24.
 */

var WebSocketClient = require('websocket').client;

var client = new WebSocketClient();

client.on('connectFailed', function (error) {
    console.log('Connect Error: ' + error.toString());
});

client.on('connect', function (connection) {

    console.log('WebSocket Client Connected');
    connection.on('error', function (error) {
        console.log("Connection Error: " + error.toString());
    });
    connection.on('close', function () {
        console.log('echo-protocol Connection Closed');
    });
    connection.on('message', function (message) {
        if (message.type === 'utf8') {
            var data = message.utf8Data;
            console.log(data);
            var ts = data.slice(0, 3);


            switch (ts) {
                case "1::":
                    break;
                case "2::":
                    sendData("2:::");
                    break;
                case "3::":
                    break;
                case "4::":
                    break;
                case "5::":
                    break;
                case "7::":
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
        } catch (e) {
            console.log(e.message);
        }

    }

    setInterval(function () {
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
var liveid=1469438757050221;
var url = "http://60.205.82.49:81/socket.io/1/?uid=144559824&place=room&sid=8a4624439c87d7e4d088fbf9a969522286e8e934d55ded46c9e4072cc2d1b867574aadf9bc290fdbf01fbcc014e0ef2981b199474006f1ec&roomid=" +liveid+
    "&token=f8384213e582d538acb65cf6b5ea396f&time=1469432354&nonce=ctIPY9whoM&sec=f23b8e0a67da38ef70d4b3bd612c83b1";
var request = require('request');
request(url, function (error, response, body) {
    if (error) {
        return console.log(error.message);
    }
    var ts = body.slice(0,20);
    console.log(ts);

    client.connect("ws://60.205.82.49:81/socket.io/1/websocket/" +ts+
        "?uid=144559824&place=room&sid=8a4624439c87d7e4d088fbf9a969522286e8e934d55ded46c9e4072cc2d1b867574aadf9bc290fdbf01fbcc014e0ef2981b199474006f1ec&roomid=" +liveid+
        "&token=f8384213e582d538acb65cf6b5ea396f&time=1469432354&nonce=ctIPY9whoM&sec=f23b8e0a67da38ef70d4b3bd612c83b1");

});


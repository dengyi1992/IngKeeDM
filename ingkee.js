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
var liveid = 1469438757050221;
var uid = 150531691;
//var s = "http://101.201.58.189:81/socket.io/1/?lc=3000000000005860&cv=IK2.9.50_Android&cc=TG36011&ua=Meizum2note&uid=150531691&sid=20BrU6jPAikmx7EZSP6A0i0LoWki2RNxhkAdrXEr1BoM9IsVBjPC&devi=867570028396103&imsi=460026208089352&imei=867570028396103&icc=898600f2261478202497&conn=WIFI&vv=1.0.3-2016060211417.android&aid=caf33cfb45b6cd66&osversion=android_22&proto=4&smid=DuRCYMJK7iW%2BsDMckPgAXpsIRqhtVX0LftNnFOymKTNUnHwA9%2F0COYdTgdEiGrNGcojZSgBQPQStfvxmVPjaX5Cw&city=";
//var url = "http://101.201.58.187:81/socket.io/1/?lc=3000000000005860&rid=" + liveid +"&roomid="+liveid+
//    "&cv=IK2.9.50_Android&cc=TG36011&ua=Meizum2note&uid=" + uid +
//    "&sid=20BrU6jPAikmx7EZSP6A0i0LoWki2RNxhkAdrXEr1BoM9IsVBjPC&devi=867570028396103&imsi=460026208089352&imei=867570028396103&icc=898600f2261478202497&conn=WIFI&vv=1.0.3-2016060211417.android&aid=caf33cfb45b6cd66&osversion=android_22&proto=4&smid=DuRCYMJK7iW%2BsDMckPgAXpsIRqhtVX0LftNnFOymKTNUnHwA9%2F0COYdTgdEiGrNGcojZSgBQPQStfvxmVPjaX5Cw&city=";
var url="http://101.201.58.182:81/socket.io/1/?lc=3000000000006209&cv=IK2.9.60_Android&cc=TG36008&ua=XiaomiMi-4c&uid=149696793&sid=20VsFCXhgzH4REZWY7JgnENMQ4jaVZmIvFhHMzotouaSRpkoxq&devi=867830023366935&imsi=460030131043237&imei=867830023366935&icc=89860316750100568567&conn=WIFI&vv=1.0.3-2016060211417.android&aid=5466454e28138421&osversion=android_22&proto=4&smid=DuQc%2FM%2FITqFgsGvYx4g4isi4vLageGtmr%2FnkA%2BfdlpKUoLmJMhd3ejRtfO1vG3eKK8JNuGD6M38mudxLU2sGU31Q&city=";
var request = require('request');
request(url, function (error, response, body) {
    if (error) {
        return console.log(error.message);
    }
    var ts = body.slice(0, 20);
    console.log(ts);

    // client.connect("ws://60.205.82.49:81/socket.io/1/websocket/" +ts+
    //     "?uid=144559824&place=room&sid=8a4624439c87d7e4d088fbf9a969522286e8e934d55ded46c9e4072cc2d1b867574aadf9bc290fdbf01fbcc014e0ef2981b199474006f1ec&roomid=" +blob+
    //     "&token=f8384213e582d538acb65cf6b5ea396f&time=1469432354&nonce=ctIPY9whoM&sec=f23b8e0a67da38ef70d4b3bd612c83b1");
    client.connect("ws://101.201.58.182:81/socket.io/1/websocket/" + ts +
        "?lc=3000000000006209&cv=IK2.9.60_Android&cc=TG36008&ua=XiaomiMi-4c&uid=149696793&sid=20VsFCXhgzH4REZWY7JgnENMQ4jaVZmIvFhHMzotouaSRpkoxq&devi=867830023366935&imsi=460030131043237&imei=867830023366935&icc=89860316750100568567&conn=WIFI&vv=1.0.3-2016060211417.android&aid=5466454e28138421&osversion=android_22&proto=4&smid=DuQc%2FM%2FITqFgsGvYx4g4isi4vLageGtmr%2FnkA%2BfdlpKUoLmJMhd3ejRtfO1vG3eKK8JNuGD6M38mudxLU2sGU31Q&city=");
});


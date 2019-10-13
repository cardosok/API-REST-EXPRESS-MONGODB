// Importa net module.
var net = require('net');
var http = require('http');


// This function create and return a net.Socket object to represent TCP client.
module.exports = function getConn(connName,ip,porta){
    let ipPorta = {
        host: ip,
        port: porta
    }

    //Cria a conexão do servidor TCP
    var client = net.createConnection(ipPorta, function () {
        console.log('Nome da conexão: ' + connName);
        console.log('Cliente IP : ' + client.localAddress + "Porta: " + client.localPort);
        console.log('Server IP : ' + client.remoteAddress + " Porta:" + client.remotePort);
    });

    //client.setTimeout(1000);
    client.setEncoding('utf8');

    // When receive server send back data.
    client.on('data', function (data) {
        console.log('dados: '+ data);
        let teste = JSON.stringify(data);
        console.log(teste);

        http.Server(function (req, res) {
            res.write('Hello World!'); //write a response to the client
            res.end(); //end the response
          }).listen(8080);
    
    });

    // When connection disconnected.
    client.on('end',function () {
        console.log('Cliente desconectado. ');
    });

    client.on('timeout', function () {
        console.log('Timeout do Cliente. ');
    });

    client.on('error', function (err) {
        console.log(JSON.stringify(err));
    });
    
    return client;
}

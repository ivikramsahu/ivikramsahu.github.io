---
title: "WebSockets: A Conceptual Overview"
description: "Note: This article is for technical folks ranging from beginner to intermediate level. so if you are already aware of a particular topic, please feel free to check the Table of Content ⏩\n✔ Introduction\nReal-time communication has taken a great pace i..."
date: 2021-08-18
draft: false
readTime: 7
views: 10
---
*Note: This article is for technical folks ranging from beginner to intermediate level. so if you are already aware of a particular topic, please feel free to check the* [*Table of Content*](#toC) 

##  Introduction

Real-time communication has taken a great pace in shaping the world of the internet. In the post COVID era, every type of communication has changed, right from sending emails and waiting for your client's response to interacting with them on Slack communities.

This instant messaging, video/audio calls, and other similar technologies have gradually helped us to improve with time management and reduced the overall response time.

These innovations have become possible just because of **WebSockets** .

In this article, we will go through some amazing concepts of WebSockets and how APIs are implemented for fluent real-time communication.

##  Table of Content

* [Introduction](#intro)
    
* [What is a WebSocket?](#websockets)
    
* [Why WebSocket?](#whywebsocket)
    
* [Lifecycle of a WebSocket](#lifecycle)
    
* [WebSockets Protocol Overview.](#websocketprotocoloverview)
    
* [WebSocket APIs](#websocketapi)
    
* [Advantages of WebSockets](#advantages)
    
* [Conclusion](#conclusion)
    
* [Reference](#ref)
    

##  What is a WebSocket?

WebSocket is a [transport layer](https://en.wikipedia.org/wiki/Transport_layer) protocol that provides a persistent connection between client and server. This WebSocket operates over a TCP/IP socket connection and provides a full-duplex and bidirectional functionality for communication.

E.g., Let's assume we want to create a wired connection where two-person want to communicate with each other (ie. A wants to talk with B). Now, to start the conversation it becomes mandatory for one end(A) to have a dial-in number (acts as a handshake) for connecting to the other end(B).

![communication](https://cdn.hashnode.com/res/hashnode/image/upload/v1720788563672/5ed97b54-20a9-4e2c-b97d-58242a8e1757.jpeg)

Here, once (assuming) **A** has successfully dialed to **B**, then a persistent connection will be established between A and B just like a tunnel where the information can flow from both ends.

Messaging applications work the same as the wired connection we discussed above where a connection is created and the sequence of messages is exchanged with great speed.

But wait... 

Can't these messages be sent using REST APIs? Why do developers prefer switching to WebSockets? Is there some issue with REST APIs?

Well, no worries! Let's dig up more and understand why WebSocket was introduced when there were REST APIs?

[Back to Top](#toC)

##  Why WebSocket?

The API is an HTTP-based technology that allows two applications to communicate with each other. This HTTP-based technology strictly operates over unidirectional protocol. Here, the server makes sure that every response data sent has to be requested from the client.

Now, let's get back to our messaging application where two people chat using APIs. Since HTTP APIs are unidirectional the client and server have to act both respectively and make continuous to and fro connections to get response data (relay messages from A to B and vice versa). These connections are tedious to handle.

To avoid this messy connection, there comes a concept of long polling. This long polling acts as a workaround for the above scenario where a client can send an HTTP request with a long timeout period and the server can keep pushing data back to the client.

Since this is just a workaround, you can expect some drawbacks as well, i.e. long polling works perfectly when the client and server are having continuous data transfer, but the problem arises when there is no data available to send back to the client. The server unnecessarily holds the resources throughout the length of the poll (timeout).

**To overcome the above limitation of HTTP-based Technology, *WebSockets was born***.

The resources are unnecessarily tied up to the server throughout the length of the poll in HTTP., On the other hand, WebSocket allows communicating over the network freely. This communication is quite similar to [UDP](https://en.wikipedia.org/wiki/User_Datagram_Protocol) but with the security of [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol).

[Back to Top](#toC)

##  Lifecycle of a WebSocket

WebSocket follows \[RFC 6455 - protocol\] (https://datatracker.ietf.org/doc/html/rfc6455) where it asks for an opening handshake followed by a basic message framing, layered over TCP.

![webSocket cycle](https://cdn.hashnode.com/res/hashnode/image/upload/v1720788565092/3ca5af48-74b0-4790-8893-534fe45f8662.png)

Image credits: [raywenderlich](https://www.raywenderlich.com/13209594-an-introduction-to-websockets)

WebSockets begin their life cycle by initiating a standard HTTP request and response as shown in the image above. Within this request, the client asks servers to open a web connection. If the server agrees, then an initial handshake is established successfully.

This handshake is a piece of evidence that the client and server have agreed to share the TCP/IP socket for communication as a WebSocket connection. Now the information can flow using basic message framing protocol. To close the socket both ends should acknowledge for turning down the TCP connection.

I hope by this time you might have understood why WebSockets are used instead of REST APIs.

[Back to Top](#toC)

##  WebSockets Protocol Overview

WebSockets URIs are the same as HTTP URIs but the only difference you can find is the scheme. WebSockets don't use an HTTP/HTTPS scheme; instead it uses ws/wss (web socket secure) to connect with the hosts/endpoints. E.g.

**HTTP URIs**:

```bash
http://domain-name[:port]/resource-path/resource-id
{secured} https://domain-name[:port]/resource-path/resource-id
```

**WebSocket URIs**:

```bash
ws://domain-name[:port]/resource-path/resource-id
{secured} wss://domain-name[:port]/resource-path/resource-id
```

To establish a secure WebSocket connection, the HTTP request/response calls need to be upgraded. So, the clients/server both need to support the WebSocket connection and pass a few request headers.

```bash
GET ws://localhost2.com:3000/ HTTP/1.1
Host: localhost:8000
Connection: Upgrade
Pragma: no-cache
Upgrade: websocket
Sec-WebSocket-Version: 13
Sec-WebSocket-Key: q3xPeO32u5496gldTuKaSAh==
```

Let us understand each header that is required to establish a WebSocket connection.

* `GET ws://localhost2.com:3000/ HTTP/1.1`: This is an actual GET call that connects a WebSocket insecurely `{ws}` having endpoint as `localhost2.com:3000` using the first version of the HTTP protocol.
    
* `Host: localhost:8000`: This is a Host from where the request is initiated. Currently, it is a local machine `localhost:8000`.
    
* `Connection: Upgrade`: Connection header manages the opening and closing of network connection after the HTTP call. It is normally set to `keep-alive` which helps to keep the connection persistent while HTTP calls. Using `Upgrade` makes sure to keep the connection active and notifies that communication will open for non-HTTP requests only.
    
* `Pragma: no-cache`: It is a means for the browser to tell the server and any intermediate caches that it wants a fresh version of the resource, not for the server to tell the browser not to cache the resource
    
* `Upgrade: websocket`: The header is used by the client to ask the server to follow one of the protocols for connection. In this case, the client is asking for a WebSocket connection.
    
* `Sec-WebSocket-Version: 13`: The WebSocket protocol only accepts the usage of version 13, any other version will be considered invalid here.
    
* `Sec-WebSocket-Key: q3xPeO32u5496gldTuKaSAh==`: This is one time randomly generated unique key which is 16-byte and base64 encoded.
    

Once the client has securely established a WebSocket connection, it waits for the server's response which has `HTTP 101 Switching Protocols`. The server's response headers are shown below.

```bash
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: aGVsbG8gZXZlcnlvbmUg=
```

The HTTP 101 Switching Protocols response indicates that the server is switching to the protocol that the client requested in its Upgrade request header. In addition, the server must include HTTP headers that validate the connection was successfully upgraded.

[Back to Top](#toC)

##  WebSocket APIs

WebSocket API allows creating a bidirectional, full-duplex persistent connection that helps two applications to interact with each other fluently.

This can be visualized as a tunnel where data can be sent and received constantly without waiting for each other's response.

##  Advantages of WebSockets

* **Bidirectional**: In HTTP, the client needs to wait for the server's response after every request, whereas on the other side WebSockets allows the client/server to send and receive real-time updates asynchronously. E.g. stocks dashboard where data is continuously pushed and the graph is plotted against the same.
    
* **Low-Latency**: WebSockets doesn't create a new connection for every request therefore the network latency is automatically reduced. After the initial handshake, which includes standard HTTP header information, all subsequent messages include only relevant information. This reduction in latency enables lightning-fast communication
    
* **Extensible**: The WebSocket API supports over 40 subprotocols such as WAMP, XMPP, AMQP, and MQTT, as well as extensions that enable powerful functionality like multiplexing and data compression.
    
* **Secure**: The WebSocket Secure (WSS) protocol uses standard SSL and TLS encryption to establish a secure connection between the client and server. While unsecured WebSockets use TLS port number 80, WSS uses port 443.
    

[Back to Top](#toC)

##  Conclusion

In this article, we began with the introduction of WebSockets and learned how WebSockets are used behind the scenes while building Real-time applications to make our life faster and simpler.

Next, we went through some technical concepts of the WebSocket protocol. Also, we compare how WebSockets are different from HTTP-based technology with some real-life examples.

As we end this article, you should have a clear understanding of WebSockets and how they can be used in your future applications.

Please leave your feedback and doubts in the comments below! 

##  Reference

* https://datatracker.ietf.org/doc/html/rfc6455
    
* https://developer.mozilla.org/en-US/docs/Web/API/Websockets\_API#interfaces
    
* https://blog.bitsrc.io/apis-vs-websockets-vs-webhooks-what-to-choose-5942b73aeb9b
    
* https://www.raywenderlich.com/13209594-an-introduction-to-websockets
    
* https://ably.com/topic/websockets

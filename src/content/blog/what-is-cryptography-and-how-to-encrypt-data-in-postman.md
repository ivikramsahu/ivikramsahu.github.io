---
title: "What Is Cryptography? And How to Encrypt Data in Postman"
description: "Introduction\nWith APIs responsible for sending or receiving any sort of information over the internet—from a simple phone call to your bank transactions—today’s increase in internet usage and data sharing means APIs must be aligned with security.\nWhe..."
date: 2022-03-09
draft: false
readTime: 5
views: 11
---
---

## Introduction

With APIs responsible for sending or receiving any sort of information over the internet—from a simple phone call to your bank transactions—today’s increase in internet usage and data sharing means APIs must be aligned with [security](https://blog.postman.com/tag/security/).

When APIs exchange data over an insecure network, there is a greater chance of that data getting manipulated by a malicious third party. So to make the internet safer and to avoid unnecessary data theft, it is always better to encrypt every piece of information before pushing it to a network.

This is where the concept of cryptography comes in. Cryptography is one of the ways we can keep information secured over an insecure public network. Let’s dive deeper into cryptography, how it works, and how to use crypto encryption with the [Postman API Platform](https://www.postman.com/product/what-is-postman/).

## What is cryptography?

In simple terms, “cryptography” refers to the art of securing sensitive information using mathematical algorithms. These algorithms stop third parties, commonly known as adversaries or hackers, to peep into your data. To avoid unauthorized access to information communicated between authorized parties, cryptography uses encryption and decryption methods. According to American cryptographer and computer security expert Bruce Schneier, cryptography is “the art and science of keeping messages secure.”The cryptography method transforms plain text into encrypted text (aka ciphertext) using the encryption key, and the target receiver can decrypt it using a unique decryption key. This decryption key depends on what type of cryptography algorithm is used by the sender. It’s important to note that encryption algorithms keep the data secure only if the attackers are unaware of your method of encryption or anything else about the key.

![Example cryptography workflow](https://cdn.hashnode.com/res/hashnode/image/upload/v1720788542112/4e634b3c-e05d-40d5-bc81-ab5b21e5eb29.png)

*Example cryptography workflow*

## 3 types of cryptography

* [**Hash function**](https://en.wikipedia.org/wiki/Cryptographic_hash_function)**:** Hash functions are the most commonly used cryptography algorithms, in which there is no involvement of any key. In hash functions, plain text is transformed into a fixed-length of value, which is never recovered to its original form.
    
    * The best use of hash functions is password comparison without storing them. The plain text will output the same hash every time whenever a particular function is called.
        
    * Hash functions include [MD5](https://en.wikipedia.org/wiki/MD5), [SHA256](https://en.wikipedia.org/wiki/SHA-2), [RIPEMD160](https://en.wikipedia.org/wiki/RIPEMD), and more.
        
* [**Symmetric key encryption**](https://en.wikipedia.org/wiki/Symmetric-key_algorithm)**:** In symmetric cryptography, both sender and receiver share a single key, which they use to encrypt and decrypt. This system is faster and simpler as compared to other encryption types. The only limitation is sharing the key with the recipient over an insecure network. Symmetric encryption is brilliant when data is stored and accessed centrally.
    
    * For example, the password manager encrypts the passwords, which are not sent to anyone and stored on the machine and you’ll only need one key because you are the only one using it.
        
    * Common symmetric encryption algorithms include [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) and [DES](https://en.wikipedia.org/wiki/Data_Encryption_Standard), which we will cover in the later part of this blog post.
        
* [**Asymmetric key encryption**](https://en.wikipedia.org/wiki/Public-key_cryptography)**:** Asymmetric cryptography uses different keys for encryption and decryption of information. It uses a public key for encryption, but also a private key for decryption of data.
    
    * Common asymmetric encryption algorithms include [ECC](https://en.wikipedia.org/wiki/Elliptic-curve_cryptography) and [RSA](https://en.wikipedia.org/wiki/RSA_(cryptosystem)).
        

## How to encrypt data in Postman?

Postman allows you to perform different tasks on API requests and test scripts where you might apply encryption—for comparing within the test or authenticating headers—and there are many other possibilities when encryption can be used. To help users work with different options, Postman supports a list of[external libraries](https://learning.postman.com/docs/writing-scripts/script-references/postman-sandbox-api-reference/#using-external-libraries).

Crypto.js is one of the most requested libraries for encryption and decryption. You can find a list of examples in [this crypto.js](https://www.postman.com/postman/workspace/postman-answers/collection/18070393-66f7caac-3005-44b2-8620-16dfb64a35f4?ctx=documentation)collection, which you can start working with by forking to your workspace:

### Postman Collections for cryptography algorithms

1. [AES (Advanced Encryption Standard):](https://www.postman.com/postman/workspace/postman-answers/request/18070393-0d062245-65cd-4595-aa29-7d52e0591d16) AES is symmetric cryptography that uses a [block cipher](https://en.wikipedia.org/wiki/Block_cipher). It is used in both software and hardware across the world for encrypting sensitive data. AES uses three block ciphers, which include 128-bits, 192-bites, and 256-bits which are used to encrypt and decrypt data. Code sample for AES encryption:
    

```plaintext
const Message **=** pm.variables.replaceIn('{{$randomCatchPhrase}}')

const SecretPassphrase **=** pm.variables.replaceIn('{{$randomPassword}}')

var superSecretEncrypted **=** CryptoJS.AES.encrypt(Message, SecretPassphrase);
var noMoreSuperSecret **=** CryptoJS.AES.decrypt(superSecretEncrypted,

console. **log** ("superSecretEncrypted :: " **+** superSecretEncrypted **+**"\n" **+** 
"superSecretDecrypted :: " **+** noMoreSuperSecret);SecretPassphrase);
```

2. [DES (Data Encryption Standard)](https://www.postman.com/postman/workspace/postman-answers/request/18070393-890c5450-a224-490e-a686-bd804744b255): DES is also symmetric cryptography, which uses the same key to encrypt and decrypt data. It is considered less secure for powerful attacks, due to which the popularity among others has slightly declined. DES encrypts data in 64-bits, which means that 64-bits plain text input is sent and 64-bits ciphertext output is produced. Similarly, [Triple DES](https://www.postman.com/postman/workspace/postman-answers/request/18070393-4bec87f8-eea0-4a4a-af34-38f1b07c6a9d) can also be used, where the DES encryption is applied three times to each block to increase the key size. Code sample for DES encryption:
    

```plaintext
const Message **=** pm.variables.replaceIn('{{$randomCatchPhrase}}')
const SecretPassphrase **=** pm.variables.replaceIn('{{$randomPassword}}')

var superSecretEncrypted **=** CryptoJS.DES.encrypt(Message, SecretPassphrase);
var noMoreSuperSecret **=** CryptoJS.DES.decrypt(superSecretEncrypted, SecretPassphrase);

console. **log** ("superSecretEncrypted :: " **+** superSecretEncrypted **+**"\n" **+** 
"superSecretDecrypted :: " **+** noMoreSuperSecret);
```

3. [MD5 (Message-Digest Algorithm)](https://www.postman.com/postman/workspace/postman-answers/request/18070393-d1fd1172-daef-44d2-a993-5591d1f5d9e7): MD5 is a protocol used for authorizing messages, content, and digital signature verification. It generates a hash that can be used to verification of data or files by sender and receiver. Previously, MD5 was majorly used for encryption of data, but now it’s primarily used for authentication. The algorithm converts data into a string of 32 characters, irrespective of file size. Code sample for MD5 hash:
    

```plaintext
const Message **=** pm.variables.replaceIn('{{$randomCatchPhrase}}')
//setting up collection variable as MD5hash
var MD5hash **=** CryptoJS.MD5(Message). **toString** ();
console. **log** ("MD5hash :: " **+** MD5hash)
```

4. [SHA-256 (Secure Hashing Algorithm)](https://www.postman.com/postman/workspace/postman-answers/request/18070393-a911b1c6-8766-4e3e-bf82-8ec2946b13a2): SHA-256 is a patented algorithm that is a part of the SHA-2 family. This is a hash function that produces 256-bits long ciphertext. It was a successor for SHA-1 which was losing strength against brute force attacks. Code sample for SHA-256:
    

```plaintext
var sha256Hash **=**   CryptoJS.SHA256(Message). **toString** ();
console. **log** ("sha256Hash :: " **+** sha256Hash)
const Message **=** pm.variables.replaceIn('{{$randomCatchPhrase}}')
```

## Conclusion

After walking through the cryptography algorithms above, we can see that cryptography is an essential tool for encryption that makes data secure and safe. Ultimately, data stored or transmitted with encryption is much safer than data left unencrypted. There are a lot more cryptography algorithms that can be used for different purposes depending on the use cases, so be sure to explore the complete [Encrypt Parameters Using CryptoJS collection](https://www.postman.com/postman/workspace/postman-answers/collection/18070393-66f7caac-3005-44b2-8620-16dfb64a35f4) to learn more.

The post [What Is Cryptography? And How to Encrypt Data in Postman](https://blog.postman.com/what-is-cryptography-how-to-encrypt-data-in-postman/) appeared first on [Postman Blog](https://blog.postman.com).

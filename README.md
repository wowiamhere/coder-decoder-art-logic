## Art&Logic Employment Test

- Angular 4
- 4 components
- 1 component for Encoder (.ts/.html)
- 1 component for Decoder (.ts/.html)
- `Router.navigate` to display Decoder or Coder
- `/src/app.routing.ts` for routing
- `<router-outlet></router-outlet>` at `app.component.html` to display Encoder/Decoder

*TO RUN:*  

- clone from `https://github.com/wowiamhere/coder-decoder-art-logic.git`
- run `npm install` 
- run ng serve (requires Angular 4)


### Encoder/Decoder  

#### The Encoding Function  

This function needs to accept a signed integer in the 14-bit range [-8192..+8191] and return a 4 character string.  

The encoding process is as follows:  

1. Add 8192 to the raw value, so its range is translated to [0..16383]  
2. Pack that value into two bytes such that the most significant bit of each is cleared  

Unencoded intermediate value (as a 16-bit integer):  

```
00HHHHHH HLLLLLLL
```

Encoded value:  

```
0HHHHHHH 0LLLLLLL
```

3. Format the two bytes as a single 4-character hexadecimal string and return it.  

Sample values:  

Unencoded (decimal) Intermediate (decimal) Intermediate (hex) Encoded (hex)  

```
0 8192 2000 4000
-8192 0 0000 0000
8191 16383 3fff 7F7F
2048 10240 2800 5000
-4096 4096 1000 2000
```

#### The Decoding Function  

Your decoding function should accept two bytes on input, both in the range [0x00..0x7F] and recombine them to return the corresponding integer between [-8192..+8191]  

```
Hi byte Lo byte Value
40 00 0
00 00 -8192
7F 7F 8191
50 00 2048
0A 05 -6907
55 00 2688
```

let obj = `{challenge: new Int8Array([
    39, -98, -25,    26, -104, 41, -88, -76, 5, -115, -32, -70, 38, -49, -128, 41,
    -80, 12, 32, -111, 114, 87, 92, 69, 64, -102, -29, -31, -34, -45, -82, -28,
  ]).buffer,
  rp: {name: "ForgeRock" },
  user: {
    id: Uint8Array.from("c2FoaXNvbmk", function (c) {
      return c.charCodeAt(0);
    }),  
      
    name: "sahisoni",
    displayName: "sahisoni",
  },
  pubKeyCredParams: [
    {type: "public-key", alg: -7 },
    { type:"public-key", alg: -257 },
  ],
  attestation: "none",
  timeout: 60000,
  excludeCredentials: [],
  authenticatorSelection: { userVerification: "preferred" },
}`;

JSON.parse(obj);

console.log(arr);

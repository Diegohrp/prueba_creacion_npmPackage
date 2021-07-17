const msg = [
    "Ian",
    "Noé",
    "Saúl",
    "Chuy",
    "Vidals",
    "Daniel",
    "Uriel",
    "AB"
];

export const randomMsg = () =>{
   const ms = msg[Math.floor(Math.random()*msg.length)];
   console.log(ms); 
}



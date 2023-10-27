const expresso = require("express");
const app = expresso();
const cors = require("cors");

const port = 3000;

app.use(cors(
    {
        origin: "*",
        methods: ["GET", "POST", "DELETE","UPDATE"]
    }
));

function Token(req,res,next){
    const Token = "123456"
    const auth = req.headers.authorization;
    if(auth === Token){
        next();
    }else{
        res.send("No autorizado");
    }
}

const Datos = [
	{
		clase: "Guerrero",
		atributos: {
			fuerza: 15,
			destreza: 20,
			inteligenia: 10,
			carisma: 13,
			suerte: 8
		},
		armas:["hacha", "espada", "escudo"]	
	},
	{
		clase: "Paladin",
		atributos: {
			fuerza: 14,
			destreza: 15,
			inteligenia: 16,
			carisma: 20,
			suerte: 12
		},
		armas:["baculo", "espada", "escudo"]
	},
    	{
		clase: "Arquero",
		atributos: {
			fuerza: 10,
			destreza: 24,
			inteligenia: 24,
			carisma: 10,
			suerte: 11
		},
		armas:["arco con flecha", "cuchillo", "pocion de vida"]
	}
];





app.get("/", Token, (req, res) => {res.json(Datos)})


for(let i=0; i < Datos.length; i++){
    app.get("/" + Datos[i].clase,Token, (req, res) => {res.json(Datos[i])})
}

app.listen(port, () => {console.log(`Escuchando en el puerto: `+ port)});

//npm init
//npm install http
//npm install express
//npm i cors express nodemon
import express from 'express';
import cors from "cors";
import { consultaRouter } from './routes/consulta.js';
import { exameRouter } from './routes/exames.js';
import { pacienteRouter } from './routes/paciente.js';
import { prontuarioRouter } from './routes/prontuario.js';
import { usuarioRouter } from './routes/usuario.js';
import { authRouter } from './routes/authRoutes.js';
import { auth } from './middleware/auth.js';

export const app = express();

app.use(cors()); 
app.use(express.json());

//Router usuarios
app.use('/auth', authRouter);
app.use(auth)

//Router cinsultas
app.use(consultaRouter);

//Router exames
app.use(exameRouter);

//Router pacientes
app.use(pacienteRouter);

//Router prontuario
app.use(prontuarioRouter);

//Router usuarios
app.use(usuarioRouter);



// app.listen(5000, () => console.log('Servidor rodando na porta 5000'))
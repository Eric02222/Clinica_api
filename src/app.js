import express from 'express';
import { consultaRouter } from './routes/consulta.js';
import { exameRouter } from './routes/exames.js';
import { pacienteRouter } from './routes/paciente.js';
import { prontuarioRouter } from './routes/prontuario.js';
import { usuarioRouter } from './routes/usuario.js';
import { authRouter } from './routes/authRoutes.js';

const app = express();

app.use(express.json());

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

//Router usuarios
app.use(authRouter);

app.listen(5000, () => console.log('Servidor rodando na porta 5000'))
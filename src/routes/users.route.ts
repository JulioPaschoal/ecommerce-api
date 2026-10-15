import express, { Request, Response } from 'express';

export const userRouter = express.Router();

type User = {
    id: number;
    name: string;
    email: string;
};

let id = 0;
const usuarios: User[] = [];

userRouter.get('/users', (req: Request, res: Response) => {
    res.send(usuarios);
});

userRouter.get('/users/:id', (req: Request, res: Response) => {
    const userId = Number(req.params.id);
    const user = usuarios.find((user) => user.id === userId);
    res.send(user);
});

userRouter.post('/users', (req: Request, res: Response) => {
    const user = req.body;
    user.id = ++id;
    usuarios.push(user);
    res.send({
        message: 'Usuário criado com sucesso!',
    });
});

userRouter.put('/users/:id', (req: Request, res: Response) => {
    const userId = Number(req.params.id);
    const user = req.body;
    const indexOf = usuarios.findIndex((_user: User) => _user.id === userId);
    usuarios[indexOf].name = user.name;
    usuarios[indexOf].email = user.email;
    res.send({
        message: 'Usuário atualizado com sucesso!',
    });
});

userRouter.delete('/users/:id', (req: Request, res: Response) => {
    const userId = Number(req.params.id);
    const indexOf = usuarios.findIndex((user: User) => user.id === userId);
    usuarios.splice(indexOf, 1);
    res.send({
        message: 'Usuário deletado com sucesso!',
    });
});

import { Request, response, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../models/User';

class UserController {
  async create(req: Request, res: Response) {
    const { name, email } = req.body;

    const usresRepository = getRepository(User);

    const userAlreadyExists = await usresRepository.findOne({
      email,
    });

    if (userAlreadyExists) {
      return res.status(400).json({
        error: 'User already exists!',
      });
    }

    const user = usresRepository.create({
      name,
      email,
    });

    await usresRepository.save(user);

    return res.json(user);
  }
}

export { UserController };

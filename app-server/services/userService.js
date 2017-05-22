import User from '../models/user';

export function getUserByToken(token) {
    const {_id} = token; // Читаем только id
    console.log(_id, '_id');
    // Найдем по _id и вернем с "без = 0" пароля
    return User.findOne({_id}, {password: 0})
}
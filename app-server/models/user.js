import mongoose, {Schema} from 'mongoose';
import bcrypt from 'bcrypt';
import passwordHash from 'password-hash';
import tokenGenerator from 'token-generator'
/*index - индекс для быстрого поиска*/
const UserSchema = new Schema ({
   login: {type: String, unique: true, lowercase: true, index: true},
   password: String
});

// mongoose middleware
UserSchema.pre('save', function(next) {
    // Если пароль небыл изменен - делаем next();
    if(!this.isModified('password')){
        return next();
    }
//console.log(0, this.password);
    let psd = this.password;

    // Иначе записываем новый пароль
    let saltRounds = 10;  // количество символов в новой соли
     bcrypt.genSalt(saltRounds, function(err, salt) { // генерируем соль

        if (err) next(err);
        let generatedSalt = salt; // Если все хорошо - создаем hash на основе пароля и соли
            //console.log(33, generatedSalt, psd);
          bcrypt.hash(psd, generatedSalt, function(err, hash) {
            //console.log(3, hash);
              if (err) next(err);
                this.password = hash; // Теперь пароль зашифован!
            //console.log(4);
            next();
                //console.log(4);
        });
    });
});

// Сравнение с существуещим паролем
 UserSchema.methods.comparePassword = (password)=>{
     //console.log(password, 'password');
    //console.log(password == this.password, 'OTVETOTVET');
    return Promise.resolve(password == this.password);
};

// Экспортируем User во внешний мир
export default mongoose.model('User', UserSchema);





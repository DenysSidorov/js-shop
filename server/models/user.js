import mongoose, {Schema} from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new Schema({
  login: {type: String, unique: true, required: true, index: true},
  password: {type: String, required: true, minlength: 4},
  nick: {type: String, required: true, minlength: 4},
  isAdmin: {type: Boolean, default: false, required: true}
});

UserSchema.pre('save', function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  let psd = this.password;

  bcrypt.genSalt(10, function (err, salt) {
    if (err) next(err);
    bcrypt.hash(psd, salt, function (error, hash) {
      if (error) next(err);
      psd = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = (password) => {
  return Promise.resolve(password === this.password);
};

export default mongoose.model('User', UserSchema);

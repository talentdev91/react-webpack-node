/**
 * Defining a User Model in mongoose
 * Code modified from https://github.com/sahat/hackathon-starter
 */

//import bcrypt from 'bcrypt-nodejs';
import mongoose from 'mongoose';

// Other oauthtypes to be added

/*
 User Schema
 */

const UserSchema = new mongoose.Schema({
  accessToken: String,
  refreshToken: String,
  profile: {
    Id: String,
    Username: String,
    LastName: String,
    FirstName: String,
    Email: { type: String, unique: true, lowercase: true },
    Alias: { type: String, unique: true, default: '' },
    CommunityNickname: String,
    IsActive: Boolean,
    LocaleSidKey: String,
    LanguageLocaleKey: String
  }
});

// function encryptPassword(next) {
//   const user = this;
//   if (!user.isModified('password')) return next();
//   return bcrypt.genSalt(5, (saltErr, salt) => {
//     if (saltErr) return next(saltErr);
//     return bcrypt.hash(user.password, salt, null, (hashErr, hash) => {
//       if (hashErr) return next(hashErr);
//       user.password = hash;
//       return next();
//     });
//   });
// }

/**
 * Password hash middleware.
 */
//UserSchema.pre('save', encryptPassword);

/*
 Defining our own custom document instance method
 */
// UserSchema.methods = {
//   comparePassword(candidatePassword, cb) {
//     bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
//       if (err) return cb(err);
//       return cb(null, isMatch);
//     });
//   }
// };

/**
 * Statics
 */

UserSchema.statics = {};

export default mongoose.model('User', UserSchema);

const mongoose = require('../../common/services/mongoose.service').mongoose;
const Schema = mongoose.Schema;

const shortSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
});
shortSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
shortSchema.set('toJSON', {
    virtuals: true
});

shortSchema.findById = function (cb) {
    return this.model('Users').find({id: this.id}, cb);
};

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    permissionLevel: Number,
    __v: { type: Number, select: false},
    mainPayingInstrumentId: Number,
    mainPayingInstrumentLevel: Number,
    secondPayingInstrumentId: Number,
    secondPayingInstrumentLevel: Number,
    musicGenres: Number,
    region: Number,
    ageClass: Number,
});

userSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
userSchema.set('toJSON', {
    virtuals: true
});

userSchema.findById = function (cb) {
    return this.model('Users').find({id: this.id}, cb);
};

const User = mongoose.model('Users', userSchema);
const ShortUser = mongoose.model('ShortUsers', shortSchema);


exports.findByEmail = (email) => {
    return User.find({email: email});
};
exports.findById = (id) => {
    return User.findById(id)
        .then((result) => {
            result = result.toJSON();
            delete result._id;
            delete result.__v;
            return result;
        });
};

exports.createUser = (userData) => {
    const user = new /*User*/ShortUser(userData);
    let resp = user.save();
    return resp;
};

exports.list = (perPage, page) => {
    return new Promise((resolve, reject) => {
        User.find()
            .limit(perPage)
            .skip(perPage * page)
            .exec(function (err, users) {
                if (err) {
                    reject(err);
                } else {
                    resolve(users);
                }
            })
    });
};

exports.patchUser = (id, userData) => {
    return User.findOneAndUpdate({
        _id: id
    }, userData);
};

exports.removeById = (userId) => {
    return new Promise((resolve, reject) => {
        User.deleteMany({_id: userId}, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(err);
            }
        });
    });
};

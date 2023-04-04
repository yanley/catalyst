const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class Job extends Model { }

//Sequelize will create this table if it doesn't exist on startup
Job.init({
    adId: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true
    },
    title: {
        type: DataTypes.STRING, allowNull: false, required: true
    },
    summary: {
        type: DataTypes.STRING, allowNull: false, required: true
    },
    bulletPoints: {
        type: DataTypes.STRING, allowNull: false, required: true, unique: true
    }}, 
    {
        sequelize: sequelizeInstance, modelName: 'jobs', //use lowercase plural format
        timestamps: true, freezeTableName: true
    }
)
module.exports = Job;
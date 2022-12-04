const {Model,DataTypes} = require('sequelize')


class User extends Model{
    static init(connection){
        super.init({
            name: {
                type: DataTypes.STRING(30),
                allowNull: false
            },
            lastName: {
                type: DataTypes.STRING(30),
                allowNull:false
            },
            dob: {
                type: DataTypes.DATE,
                allowNull:false
            },
            createdAt: {
                type: DataTypes.TIME,
                allowNull:true
            },
            updatedAt: {
                type: DataTypes.TIME,
                allowNull:true
            },
            deletedAt: {
                type: DataTypes.TIME,
                allowNull:true,
            },
        },{
            
            sequelize: connection,
            tableName: 'users',
            timestamps: true,
            updatedAt: false
            
        })
    }
}

module.exports = User
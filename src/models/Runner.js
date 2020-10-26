import Sequelize from 'sequelize'
import {sequelize} from '../database/database'

const Runner = sequelize.define('runners',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey: true
    },
    name:{
        type:Sequelize.TEXT
    },
    email:{
        type:Sequelize.TEXT
    },
    km:{
        type:Sequelize.DECIMAL
    }
},{
    timestamps:false
})

export default Runner
const sequelizer = require('../../utils/sequelizer').sequelizer;

const User = require('../UserEntity').Users;
const Role = require('../RoleEntity').Roles;
const Page = require('../PageEntity').Pages;
const Cinema = require('../CinemaEntity').Cinemas;
const CinemaBranch = require('../CinemaBranchEntity').CinemaBranches;
const Room = require('../RoomEntity').Rooms;
const ShowTime = require('../ShowTimeEntity').ShowTime;
const Movie = require('../MovieEntity').Movies;
const Ticket = require('../MovieEntity').Ticket;

// User n - 1 Role
User.belongsTo(Role);

Page.belongsTo(User);
Page.belongsTo(Page, {
    as: 'parent',
    allowNull: true
});

Room.belongsTo(CinemaBranch);

CinemaBranch.belongsTo(Cinema);

Room.belongsToMany(ShowTime, {
    as: 'ShowTimes',
    through: 'room_showtime',
    timestamps: false
});
ShowTime.belongsToMany(Room, {
    as: 'Rooms',
    through: 'room_showtime',
    timestamps: false
});
ShowTime.belongsTo(Movie);

Movie.belongsTo(User, {
    foreignKey: 'created_by'
});

sequelizer.sync({force: false}).then(() => {
    console.log('Database is synced');
});
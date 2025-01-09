create database scoreDB;

use scoreDB;

create table users (
	username varchar(30) PRIMARY KEY, 
    email varchar(30), 
    password varchar(15),
    type varchar(10)
);
truncate table users;
insert into users values("admin1", "admin1@gmail.com", "adminpass", "admin");
insert into users values("user1", "user1@gmail.com", "userpass", "user");
select * from users;

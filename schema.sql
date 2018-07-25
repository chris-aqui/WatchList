create database movie_planner_DB;
use movie_planner_DB;


create table movies (
	id int not null auto_increment,
    movie varchar(255) not null,
    primary key(id)
);

INSERT INTO movies (movie) VALUE ('mission impossible');
#1 MVC PROJECT
First: pnpm install for node_modules
Second:need Postgre sql for database

DDL code for db : -- auto-generated definition
create table users
(
    id          serial
        primary key,
    name        varchar(30)             not null,
    "lastName"  varchar(30)             not null,
    dob         date                    not null,
    "createdAt" timestamp default now() not null,
    "updatedAt" timestamp,
    "deletedAt" timestamp
);

alter table users
    owner to postgres;


used dependencies: Dotenv    

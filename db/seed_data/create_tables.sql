create table classes (
    id serial primary key, 
    name varchar(100) not null
);

create table modules (
    id serial primary key, 
    title varchar(100) not null, 
    class_id int references classes on delete cascade not null 
);

create table cards (
    id serial primary key,
    question text not null,
    answer text not null,
    module_id int references modules on delete cascade not null
)
create table classes (
    id serial primary key, 
    name varchar(100) not null
);

create table modules (
    id serial primary key, 
    title varchar(100) not null, 
    class_id int references classes not null
);

create table cards (
    id serial primary key,
    question text not null,
    answer text not null,
    module_id int references modules not null
)

-- create table questions (
--     id serial primary key, 
--     content text not null,
--     module_id int references modules not null
-- );

-- create table answers(
--     id serial primary key, 
--     content text not null, 
--     question_id int references questions not null
-- );


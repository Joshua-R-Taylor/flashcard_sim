insert into classes (
    name
) values (
    'Test Class 1'
);

insert into modules (
    title,
    class_id
) values (
    'Module 1',
    1
);

insert into questions (
    content,
    module_id
) values (
    'This is a test question for Module 1 of Test Class 1',
    1
);

insert into answers (
    content, 
    question_id
) values (
    'It sure is!',
    1
);
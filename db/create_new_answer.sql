insert into answers (
    content, 
    question_id
) values (
    ${answer},
    ${question_id}
)
returning id;
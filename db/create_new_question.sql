insert into questions (
    content, 
    module_id
) values (
    ${question},
    ${module_id}
)
returning id;
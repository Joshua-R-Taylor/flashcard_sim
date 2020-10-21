insert into modules (
    class_id,
    title
) values (
    ${id},
    ${title}
) 
returning id, title;
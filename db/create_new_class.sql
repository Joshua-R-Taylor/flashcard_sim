insert into classes (
    name
) values (
    ${name}
)
returning id, name;
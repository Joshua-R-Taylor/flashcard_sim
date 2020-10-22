select c.question, c.answer from cards c
join modules m on c.module_id = m.id
where m.class_id = $1
order by c.id desc
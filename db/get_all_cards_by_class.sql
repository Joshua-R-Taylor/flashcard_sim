-- select q.content as question, a.content as answer from questions q
-- join answers a on q.id = a.question_id
-- join modules m on q.module_id = m.id
-- where m.class_id = $1
-- order by m.id desc

select c.question, c.answer from cards c
join modules m on c.module_id = m.id
where m.class_id = $1
order by c.id desc
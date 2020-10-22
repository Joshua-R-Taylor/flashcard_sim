select q.content as question, a.content as answer from questions q
join answers a on q.id = a.question_id
join modules m on q.module_id = m.id
where m.class_id = $1
order by m.id desc
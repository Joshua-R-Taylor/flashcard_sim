select q.content as question, a.content as answer from questions q 
join answers a on q.id = a.question_id
where q.module_id = $1
order by q.id desc
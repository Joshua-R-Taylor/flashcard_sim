select c.question, c.answer from cards c
where module_id = $1
order by c.id desc
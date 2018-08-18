-- select * from cars
-- WHERE auth_id = $1
-- ORDER BY id

select * from cars 
JOIN users
ON users.auth_id = cars.auth_id 
WHERE auth_id = $1
ORDER BY id
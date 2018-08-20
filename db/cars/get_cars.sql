-- select * from cars
-- WHERE auth_id = $1
-- ORDER BY id

select users.user_name, users.email, cars.id, cars.auth_id, cars.year, cars.make, cars.model, cars.rowsofseats, cars.licenseplate from users 
JOIN cars
ON cars.auth_id = users.auth_id 
WHERE cars.auth_id = $1
ORDER BY cars.id; 
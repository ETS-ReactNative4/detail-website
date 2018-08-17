UPDATE cars 
SET licenseplate = $2
WHERE id = $1;

SELECT * FROM cars 
WHERE auth_id = $3
ORDER BY id
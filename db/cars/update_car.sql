UPDATE cars 
SET licenseplate = $2
WHERE id = $1;
SELECT * FROM cars 
ORDER BY id
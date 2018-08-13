UPDATE cars
SET year = $2, make = $3, model = $4, rowsofseats = $5, licenseplate = $6
WHERE id = $1;
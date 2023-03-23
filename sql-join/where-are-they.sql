select "cities"."name",
       "district",
       "line1"
  from "cities"
  join "addresses" using ("cityId");

-- join addresses to cities using cityId
-- select "line1", "cities"."name", "district"

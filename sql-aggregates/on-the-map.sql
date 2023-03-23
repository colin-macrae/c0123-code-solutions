-- select count("countryId")
--   from "cities";

-- you want cities per country
-- you can't access cities from country table
-- cities is in the city table and has country ID
-- PROCESS ////////////////////////////////////
-- join cities and countries by cityId
-- find the unique cities (using "count(*)" from "something", group by "country" )

select "cities"."name" as "cityName",
        "countries"."name" as "countryName"
      --  count(*) as "totalProducts"
  from "cities"
  join "countries" using ("countryId")
  group by "countries"."name";

-- /// klay solution ///
-- SELECT "countries"."name" AS "country",
--   COUNT("cities".*) AS "NumberOfCities"
--   FROM "countries"
--   JOIN "cities" USING ("countryId")
--   GROUP BY "countries"."name";

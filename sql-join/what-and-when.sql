select "releaseYear", "title", "genres"."name"
  from "films"
  join "filmGenre" using ("filmId")
  join "genres" using ("genreId")
  where "title" = 'Boogie Amelie'

-- select "releaseYear" from "films"
-- select genres.name from genres
-- where title = bookgie amelia
-- join filmGenre using filmId
-- join genres to filmGenra using genreId

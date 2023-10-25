select  "addresses"."line1",
        "addresses"."district",
        "cities"."name" as "cityName",
        "countries"."name" as "countryName"
        from "addresses"
        join "cities" using ("cityId")
        join "countries" using ("countryId");

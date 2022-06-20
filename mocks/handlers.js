import { rest } from "msw";
import mockData from "../data/rickandmorty";

export const handlers = [
  rest.get(process.env.NEXT_PUBLIC_API_URL, (req, res, ctx) => {
    console.log("msw get is called");
    const error = req.url.searchParams.get("error");

    if (error === "true") {
      return res(
        ctx.json({
          error: true,
        })
      );
    }

    return res(ctx.json(mockData));
  }),
  rest.post(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/rickandmorty`,
    (req, res, ctx) => {
      console.log("msw post is called");
      const data = JSON.parse(req.body);

      const searchInputValue = data.searchValue;

      if (searchInputValue === "error") {
        return res(ctx.json({ error: true }), 400);
      }

      const filteredCharacters = mockData.results.filter((character) =>
        character.name.toLowerCase().includes(searchInputValue)
      );

      return res(ctx.json(filteredCharacters));
    }
  ),
];

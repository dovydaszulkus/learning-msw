// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mockData from "../../data/rickandmorty";

export default function handler(req, res) {
  console.log("api is called");
  const { method } = req;

  switch (method) {
    case "GET":
      res.status(200).json(mockData);
      break;
    case "POST":
      const searchInputValue = JSON.parse(req.body).searchValue;

      if (searchInputValue === "error") {
        return res.status(400).json({ error: true });
      }

      const filteredCharacters = mockData.results.filter((character) =>
        character.name.toLowerCase().includes(searchInputValue)
      );

      res.status(200).json(filteredCharacters);
      break;
    default:
      res.status(200).json(mockData);
  }
}

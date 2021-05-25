import Movie from "../domain/Movie";

test("new Movie should be empty", () => {
  const movie = new Movie(
    123,
    "Мстители",
    2000,
    2010,
    "США",
    "Аверджес что тот там",
    "Fantastic",
    2.3,
    "imax",
    "www.kinopimagimage.jpg"
  );

  type Data = {
    id: number;
    name: string;
    price: number;
    age: number;
    country: string;
    tagline: string;
    genre: string;
    time: number;
    type: string;
    image: string;
  };
  const data: Data = {
    id: 123,
    name: "Мстители",
    price: 2000,
    age: 2010,
    country: "США",
    tagline: "Аверджес что тот там",
    genre: "Fantastic",
    time: 2.3,
    type: "imax",
    image: "www.kinopimagimage.jpg",
  };
  expect(movie).toEqual(data);
});
